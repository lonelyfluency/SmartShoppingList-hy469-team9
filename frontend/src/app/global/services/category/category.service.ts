
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Product {
  Name: string;
  NameId: number;
  ClassName: string;
  Price: number;
  ClassId: number;
  ImagePath: string;
  ProductDescriptionPath: string;
}

interface MainCategory {
    name: string;
    subcategories: SubCategory[];
  }
  
  interface SubCategory {
    name: string;
    subsubcategories?: SubSubCategory[];
    products?: Product[];
  }
  
  interface SubSubCategory {
    name: string;
    products: Product[];
  }
  
  interface Product {
    className: string;
    price: number;
    iconicImagePath: string;
    productDescriptionPath: string;
  }
  
  // Hardcoded main categories
  const MAIN_CATEGORIES: MainCategory[] = [
    {
      name: 'Foods',
      subcategories: [
        { name: 'Meat', products: [] },
        { name: 'Vegetables', products: [] },
        { name: 'Fruits', products: [] },
        { name: 'Dairy', products: [] }
      ]
    },
    { name: 'Men Clothes', subcategories: [] },
    { name: 'Women Clothes', subcategories: [] },
    { name: 'Mobile & Devices', subcategories: [] },
    { name: 'Sports', subcategories: [] },
    { name: 'Students', subcategories: [] },
    { name: 'Health & Beauty', subcategories: [] }
  ];
  
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