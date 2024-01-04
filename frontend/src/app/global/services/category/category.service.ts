import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MainCategory, Product, SubCategory } from '../../models/category/category.model';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  private dataUrl = 'assets/products.json';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<MainCategory[]> {
    return this.http.get<Product[]>(this.dataUrl).pipe(
      map(products => {
        // Map to store subcategories and their products
        const subcategoriesMap: { [key: string]: SubCategory } = {};

        products.forEach(product => {
          if (!subcategoriesMap[product.ClassName]) {
            subcategoriesMap[product.ClassName] = { name: product.ClassName, products: [] };
          }
          subcategoriesMap[product.ClassName].products.push(product);
        });

        // Convert the map into an array of subcategories
        const subcategories: SubCategory[] = Object.values(subcategoriesMap);

        // Main categories hardcoded as per requirement
        const mainCategories: MainCategory[] = [
          { name: 'Foods', subcategories: subcategories }, // Foods will contain all the classes from the dataset
          { name: 'Men Clothes', subcategories: [] },
          { name: 'Women Clothes', subcategories: [] },
          { name: 'Mobile & Devices', subcategories: [] },
          { name: 'Sports', subcategories: [] },
          { name: 'Students', subcategories: [] },
          { name: 'Health & Beauty', subcategories: [] }
        ];

        return mainCategories;
      })
    );
  }
}
