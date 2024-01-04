import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/global/services/category/category.service';
import { MainCategory,SubCategory,Product } from 'src/app/global/models/category/category.model';

@Component({
  selector: 'app-products-shop',
  templateUrl: './products-shop.component.html',
  styleUrls: ['./products-shop.component.scss']
})

export class ProductsShopComponent implements OnInit {
  mainCategories!: MainCategory[];
  selectedMainCategory?: MainCategory;
  selectedSubCategory?: SubCategory;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(categories => {
      this.mainCategories = categories;
      this.selectedMainCategory = this.mainCategories[0];
      this.selectedSubCategory = this.selectedMainCategory.subcategories[0];
    });
  }

  onMainCategorySelected(mainCategory: MainCategory): void {
    this.selectedMainCategory = mainCategory;
    this.selectedSubCategory = mainCategory.subcategories[0];
  }

  onSubCategorySelected(subCategory: SubCategory): void {
    this.selectedSubCategory = subCategory;
  }
}
