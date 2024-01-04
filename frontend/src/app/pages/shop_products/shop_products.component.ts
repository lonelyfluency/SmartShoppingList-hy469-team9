
import { Component, OnInit } from '@angular/core';
import { CategoryService, SubCategory, MainCategory, Product } from 'src/app/global/services/category/category.service';

@Component({
  selector: 'app-shop_products',
  templateUrl: './shop_products.component.html',
  styleUrls: ['./shop_products.component.scss']
})
export class ShopProductsComponent implements OnInit {
  mainCategories!: MainCategory[];
  selectedMainCategory?: MainCategory;
  selectedSubCategory?: SubCategory;
  selectedProducts?: Product[];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(categories => {
      this.mainCategories = categories;
      // Initialize the selected categories if necessary
    });
  }

  selectMainCategory(mainCategory: MainCategory): void {
    this.selectedMainCategory = mainCategory;
    // Optionally, initialize the subcategory when a main category is selected
    this.selectedSubCategory = mainCategory.subcategories[0];
    this.selectedProducts = this.selectedSubCategory.products;
  }

  selectSubCategory(subCategory: SubCategory): void {
    this.selectedSubCategory = subCategory;
    this.selectedProducts = subCategory.products;
  }
}