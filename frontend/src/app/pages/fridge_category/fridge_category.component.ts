import { Component } from '@angular/core';

interface Item {
  name: string;
  image: string;
}

interface Subcategory {
  name: string;
  items: Item[];
}

interface Category {
  name: string;
  subcategories?: Subcategory[];
}

@Component({
  selector: 'app-fridge_category',
  templateUrl: './fridge_category.component.html',
  styleUrls: ['./fridge_category.component.scss']
})
export class FridgeCategoryComponent {
  categories: Category[] = [
    { name: 'fruits', subcategories: [{ name: 'citrus', items: [{ name: 'Orange', image: 'orange.jpg' }, { name: 'Lemon', image: 'lemon.jpg' }, { name: 'Grapefruit', image: 'grapefruit.jpg' }] }] },
    { name: 'vegetables', subcategories: [{ name: 'leafy greens', items: [{ name: 'Spinach', image: 'spinach.jpg' }, { name: 'Kale', image: 'kale.jpg' }, { name: 'Lettuce', image: 'lettuce.jpg' }] }] },
    { name: 'meat', subcategories: [{ name: 'poultry', items: [{ name: 'Chicken', image: 'chicken.jpg' }, { name: 'Turkey', image: 'turkey.jpg' }] }, { name: 'red meat', items: [{ name: 'Beef', image: 'beef.jpg' }, { name: 'Pork', image: 'pork.jpg' }] }] },
    { name: 'dairy', subcategories: [{ name: 'milk', items: [{ name: 'Whole Milk', image: 'milk.jpg' }, { name: 'Skim Milk', image: 'skim_milk.jpg' }] }, { name: 'cheese', items: [{ name: 'Cheddar', image: 'cheddar.jpg' }, { name: 'Swiss', image: 'swiss.jpg' }] }] },
  ];

  selectedCategory: Category | null = null;
  selectedSubcategory: Subcategory | null = null;

  goToFridgeMain(): void {
    window.location.href = 'http://localhost:4200/fridge_main';
  }

  selectCategory(category: Category): void {
    this.selectedCategory = this.selectedCategory === category ? null : category;
    // Reset selected subcategory when changing category
    this.selectedSubcategory = null;
  }

  selectSubcategory(subcategory: Subcategory): void {
    this.selectedSubcategory = this.selectedSubcategory === subcategory ? null : subcategory;
  }
}
