
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Product {
  className: string;
  classId: number;
  coarseClassName: string;
  price: number;
  coarseClassId: number;
  iconicImagePath: string;
  productDescriptionPath: string;
}

export interface SubCategory {
    name: string;
    products: Product[];
  }
  
  export interface MainCategory {
    name: string;
    subcategories: SubCategory[];
  }
  
  @Injectable({
    providedIn: 'root'
  })
  export class CategoryService {
    private dataUrl = 'assets/products.json'; // Path to your JSON file
  
    constructor(private http: HttpClient) {}
  
    getCategories(): Observable<MainCategory[]> {
      return this.http.get<Product[]>(this.dataUrl).pipe(
        map((products) => {
          // Creating a hierarchical structure from the flat product data
          const foodCategory: MainCategory = {
            name: 'Food',
            subcategories: []
          };
  
          const subcategoryMap = new Map<string, SubCategory>();
  
          products.forEach(product => {
            let subcategory = subcategoryMap.get(product['coarseClassName']);
            if (!subcategory) {
              subcategory = { name: product['coarseClassName'], products: [] };
              subcategoryMap.set(product['coarseClassName'], subcategory);
              foodCategory.subcategories.push(subcategory);
            }
            subcategory.products.push(product);
          });
  
          // Return an array of main categories, you can add more main categories as needed
          return [foodCategory];
        })
      );
    }
  }