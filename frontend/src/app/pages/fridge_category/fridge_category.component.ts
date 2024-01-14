import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/global/services/category/category.service';
import { ShoppinglistService } from 'src/app/global/services/shoppinglist/shoppinglist.service';
import { InventoryService } from 'src/app/global/services/inventory/inventory.service';
import { MainCategory, SubCategory, Product } from 'src/app/global/models/category/category.model';
import { ShoppinglistItemModel } from 'src/app/global/models/shoppinglist/shoppinglist.model';
import { InventoryItemModel } from 'src/app/global/models/inventory/inventory.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fridge_category',
  templateUrl: './fridge_category.component.html',
  styleUrls: ['./fridge_category.component.scss']
})
export class FridgeCategoryComponent implements OnInit {
  mainCategories!: MainCategory[];
  selectedMainCategory?: MainCategory;
  selectedSubCategory?: SubCategory;
  selectedProducts: Set<Product> = new Set();  // Store selected products

  searchQuery = '';

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private shoppinglistService: ShoppinglistService, // Inject ShoppinglistService
    private inventoryService: InventoryService // Inject InventoryService
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(categories => {
      this.mainCategories = categories;
      if (this.mainCategories.length > 0) {
        this.selectedMainCategory = this.mainCategories[0];
        if (this.selectedMainCategory.subcategories.length > 0) {
          this.selectedSubCategory = this.selectedMainCategory.subcategories[0];
        }
      }
    });
  }

  onMainCategorySelected(mainCategory: MainCategory): void {
    this.selectedMainCategory = mainCategory;
    if (mainCategory.subcategories.length > 0) {
      this.selectedSubCategory = mainCategory.subcategories[0];
    } else {
      this.selectedSubCategory = undefined;
    }
  }

  onSubCategorySelected(subCategory: SubCategory): void {
    this.selectedSubCategory = subCategory;
    this.selectedProducts.clear();
  }

  onSearch(): void {
    this.router.navigate(['/search_result'], { queryParams: { query: this.searchQuery } });
  }

  goToFridgeMain(): void {
    window.location.href = 'http://localhost:4200/fridge_main';
  }

  onProductSelected(product: Product): void {
    if (this.selectedProducts.has(product)) {
      this.selectedProducts.delete(product);
    } else {
      this.selectedProducts.add(product);
    }
  }

  isProductSelected(product: Product): boolean {
    return this.selectedProducts.has(product);
  }

  addSelectedToShoppingList(): void {
    this.selectedProducts.forEach(product => {
      const shoppinglistItem = new ShoppinglistItemModel({
        NameID: product.NameID,
        Name: product.Name,
        Price: product.Price,
        Amount: 1,
        ImagePath: product.ImagePath,
        selected: false
      });
      this.shoppinglistService.add(shoppinglistItem).subscribe(
        () => console.log(`Added ${product.Name} to shopping list`),
        error => console.error('Error adding product to shopping list', error)
      );
    });
    alert('Selected products added to shopping list');
  }

  addSelectedToInventory(): void {
    this.selectedProducts.forEach(product => {
      const randomExpire = Math.floor(Math.random() * 13) + 3; // Random number between 3 and 15

      const inventoryItem = new InventoryItemModel({
        NameID: product.NameID,
        Name: product.Name,
        Price: product.Price,
        Amount: 1,
        ImagePath: product.ImagePath,
        expire: randomExpire, // Assigning random expiry days
        selected: false
      });

      this.inventoryService.add(inventoryItem).subscribe(
        () => console.log(`Added ${product.Name} with expire in ${randomExpire} days to inventory`),
        error => console.error('Error adding product to inventory', error)
      );
    });
    alert('Selected products added to inventory');
  }

}
