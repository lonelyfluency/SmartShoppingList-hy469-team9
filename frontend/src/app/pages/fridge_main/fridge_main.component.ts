import { Component } from '@angular/core';

interface ShoppingItem {
  name: string;
  quantity: number;
  imageUrl: string;
  selected: boolean;
  expiration : number;
}

@Component({
  selector: 'app-fridge_main',
  templateUrl: './fridge_main.component.html',
  styleUrls: ['./fridge_main.component.scss']
})
export class FridgeMainComponent {

  items: ShoppingItem[] = [
    { name: 'Orange', quantity: 5, expiration: 3, imageUrl: '../../../../assets/items/orange.jpg', selected: false },
    { name: 'Egg', quantity: 3, expiration: 1, imageUrl: '../../../../assets/items/egg.png', selected: false },
    { name: 'Broccoli', quantity: 1, expiration: 5, imageUrl: '../../../../assets/items/broccoli.png', selected: false },
    { name: 'Tomato', quantity: 3, expiration: 7, imageUrl: '../../../../assets/items/tomato.png', selected: false },
    { name: 'ketchup', quantity: 3,expiration: 10, imageUrl: '../../../../assets/items/ketchup.png', selected: false },
    { name: 'milk', quantity: 5,expiration: 13, imageUrl: '../../../../assets/items/milk.png', selected: false },
    { name: 'onion', quantity: 5,expiration: 23, imageUrl: '../../../../assets/items/onion.png', selected: false },
    { name: 'butter', quantity: 5,expiration: 13, imageUrl: '../../../../assets/items/butter.png', selected: false }

  ];

  selectItem(item: ShoppingItem): void {
    item.selected = !item.selected;
  }

  selectAllItems(): void {
    this.items.forEach(item => {
      item.selected = true;
    });
  }

  selectReverseItems(): void {
    this.items.forEach(item => {
      item.selected = !item.selected;
    });
  }

  goToFridgeCategoryPage(): void {
    window.location.href = 'http://localhost:4200/fridge_category';
  }
  goToFridgeMain(): void {
    window.location.href = 'http://localhost:4200/fridge_main';
  }

  goToRecipePage(): void {
    window.location.href = 'http://localhost:4200/fridge_recipe';
  }

  goToFridgeShoppingList(): void {
    window.location.href = 'http://localhost:4200/fridge_list';
  }
}
