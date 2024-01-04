import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskModel } from '../../models/category/category.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import * as _ from 'lodash';

export interface Category {
    name: string;
    subcategories?: Category[];
    items?: Item[];
  }
  
  export interface Item {
    name: string;
    price: number;
    imageUrl: string;
  }
  
  @Injectable({
    providedIn: 'root'
  })
  
  export class CategoryService {
    private categories: Category[] = []; // This will hold your category data
    
    constructor(private http: HttpClient) {}
  
    // Function to load categories from the CSV file
    loadCategoriesFromCSV(): Observable<Category[]> {
      // Use HttpClient to load the CSV file and convert it to Category[]
      // For now, we'll simulate it with an empty observable
      return of(this.categories);
    }
  }
  