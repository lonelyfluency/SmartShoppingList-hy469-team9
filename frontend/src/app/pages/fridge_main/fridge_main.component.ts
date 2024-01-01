import { Component } from '@angular/core';

interface ShoppingItem {
  name: string;
  quantity: number;
  imageUrl: string;
  selected: boolean;
}

@Component({
  selector: 'app-fridge_main',
  templateUrl: './fridge_main.component.html',
  styleUrls: ['./fridge_main.component.scss']
})
export class FridgeMainComponent {

  items: ShoppingItem[] = [
    { name: 'Tomato', quantity: 2, imageUrl: '../../../../assets/items/tomato.png', selected: false },
    { name: 'Orange', quantity: 2, imageUrl: '../../../../assets/items/orange.png', selected: false },
    { name: 'Milk', quantity: 1, imageUrl: '../../../../assets/items/milk.png', selected: false },
    { name: 'Egg', quantity: 6, imageUrl: '../../../../assets/items/egg.png', selected: false },
    { name: 'Broccoli', quantity: 2, imageUrl: '../../../../assets/items/broccoli.png', selected: false },
    { name: 'Ketchup', quantity: 1, imageUrl: '../../../../assets/items/ketchup.png', selected: false },
    { name: 'Bread', quantity: 1, imageUrl: '../../../../assets/items/bread.png', selected: false }

  ];

  selectItem(item: any): void {
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
  goToFridgeMain(): void {
    window.location.href = 'http://localhost:4200/fridge_main';
  }
  goToFridgeShoppingList(): void {
    window.location.href = 'http://localhost:4200/fridge_list';
  }


}
