import { Component, OnInit } from '@angular/core';
import { Category, CategoryService } from './category.service';

@Component({
  selector: 'app-shop_products',
  templateUrl: './shop_products.component.html',
  styleUrls: ['./shop_products.component.scss']
})
export class ShopProductsComponent implements OnInit {
  mainCategories: Category[];
  subCategories: Category[];
  subSubCategories: Category[];
  items: Item[];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.loadCategoriesFromCSV().subscribe(categories => {
      this.mainCategories = categories;
      // You should also initialize subCategories, subSubCategories, and items 
      // based on your logic and CSV data structure
    });
  }

  // Add methods to handle category selection and populate the subcategories and items
}
