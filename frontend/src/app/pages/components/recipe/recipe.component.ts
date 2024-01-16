import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShoppinglistService } from 'src/app/global/services/shoppinglist/shoppinglist.service';
import { ShoppinglistItemModel } from 'src/app/global/models/shoppinglist/shoppinglist.model';
import { InventoryService } from 'src/app/global/services/inventory/inventory.service';


interface RecipeItem {
  ImagePath: string;
  Name: string;
  selected: boolean;
  product_ids: number[];
}

interface Product {
  NameID: number;
  Name: string;
  Price: number;
  ImagePath: string;
}

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  recipeItems: RecipeItem[] = [
    { Name: 'Crepe', ImagePath: '../../../../assets/items/Crepe.jpg',  selected: false ,product_ids:[10,25,36]},
    { Name: 'Gyros', ImagePath: '../../../../assets/items/Lamb_Gyros_Sydney.jpg',  selected: false , product_ids:[11,27,34]},
    { Name: 'Pizza', ImagePath: '../../../../assets/items/lanotte.jpeg',  selected: false ,product_ids:[12,22,37]},
    { Name: 'IceCream', ImagePath: '../../../../assets/items/ice_Cream.jpg',  selected: false ,product_ids:[15,21,31]}
  ];
  products: Product[] = [];
  selectedRecipe?: RecipeItem;
  selectedIngredients: Product[] = [];

  constructor(
    private http: HttpClient,
    private shoppinglistService: ShoppinglistService,
    private inventoryService: InventoryService
  ) {}

  ngOnInit(): void {
    this.http.get<Product[]>('assets/products.json').subscribe(
      data => {
        this.products = data;
      },
      error => console.error('Error loading products', error)
    );
  }

  selectRecipe(recipe: RecipeItem): void {
    this.selectedRecipe = recipe;
    this.selectedIngredients = this.products.filter(product =>
      recipe.product_ids.includes(product.NameID)
    );
  }

  addSelectedRecipe2List(): void {
    if (this.selectedRecipe) {
      // Fetch items from the shopping list
      this.shoppinglistService.getAll().subscribe(
        currentShoppinglistItems => {
          // Fetch items from the inventory list
          this.inventoryService.getAll().subscribe(
            currentInventoryItems => {
              const itemsToAdd = this.selectedIngredients.filter(ingredient =>
                !currentShoppinglistItems.some(item => item.NameID === ingredient.NameID) &&
                !currentInventoryItems.some(item => item.NameID === ingredient.NameID)
              );

              if (itemsToAdd.length > 0) {
                // Add items to the shopping list
                itemsToAdd.forEach(ingredient => this.addItemToShoppinglist(ingredient));
                // alert(`Ingredients for ${this.selectedRecipe?.Name} added to shopping list`);
                console.log(`Ingredients for ${this.selectedRecipe?.Name} added to shopping list`);
              } else {
                // alert(`All ingredients for ${this.selectedRecipe?.Name} are already in the shopping list or inventory`);
                console.log(`All ingredients for ${this.selectedRecipe?.Name} are already in the shopping list or inventory`);
              }
            },
            error => console.error('Error fetching inventory items', error)
          );
        },
        error => console.error('Error fetching shopping list items', error)
      );
    } else {
      alert('Please select a recipe first');
    }
  }

  private addItemToShoppinglist(ingredient: Product): void {
    const shoppinglistItem = new ShoppinglistItemModel({
      NameID: ingredient.NameID,
      Name: ingredient.Name,
      Price: ingredient.Price,
      Amount: 1,
      ImagePath: ingredient.ImagePath,
      selected: false
    });

    this.shoppinglistService.add(shoppinglistItem).subscribe(
      () => console.log(`Added ${ingredient.Name} to shopping list`),
      error => console.error('Error adding ingredient to shopping list', error)
    );
  }
  
}
