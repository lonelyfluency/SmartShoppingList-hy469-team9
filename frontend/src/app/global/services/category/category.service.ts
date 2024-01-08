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
          { name: 'Foods', subcategories: subcategories, imagePath: '../../../assets/phone-images/Grocerie&foods.png' }, // Foods will contain all the classes from the dataset
          { name: 'Men Clothes', subcategories: [],  imagePath: '../../../assets/phone-images/Mens.png' },
          { name: 'Women Clothes', subcategories: [],  imagePath: '../../../assets/phone-images/Women.png' },
          { name: 'Mobile & Devices', subcategories: [],  imagePath: '../../../assets/phone-images/Mobile&Devices.png' },
          { name: 'Sports', subcategories: [] ,  imagePath: '../../../assets/phone-images/sports.png'},
          { name: 'Students', subcategories: [] ,  imagePath: '../../../assets/phone-images/Students.png'},
          { name: 'Health & Beauty', subcategories: [] ,  imagePath: '../../../assets/phone-images/Health&Beauty.png'}
        ];

        return mainCategories;
      })
    );
  }
}
