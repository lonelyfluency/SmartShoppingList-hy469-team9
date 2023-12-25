import { Component } from '@angular/core';



interface CartItem {
  imageUrl: string;
  name: string;
  amount: number;
  price: number;
  selected: boolean;
}


@Component({
  selector: 'app-shoppingListManage',
  templateUrl: './phone_shoppingListManage.component.html',
  styleUrls: ['./phone_shoppingListManage.component.scss']
})
export class PhoneShoppingListManageComponent {

  cartItems: CartItem[] = [
    { name: 'Bread', amount: 2, imageUrl: '../../../../assets/items/bread.png', price: 1, selected: false },
    { name: 'Broccoli', amount: 2, imageUrl: '../../../../assets/items/broccoli.png', price: 1.25, selected: false },
    { name: 'Egg', amount: 1, imageUrl: '../../../../assets/items/egg.png', price: 4, selected: false },
    { name: 'Ketchup', amount: 1, imageUrl: '../../../../assets/items/ketchup.png', price: 3.24, selected: false },
    { name: 'Orange', amount: 2, imageUrl: '../../../../assets/items/orange.png', price: 4, selected: false },
    { name: 'Tomato', amount: 1, imageUrl: '../../../../assets/items/tomato.png', price: 0.27, selected: false },
    { name: 'Engine Oil', amount: 1, imageUrl: '../../../../assets/items/engine_oil.png', price: 10, selected: false }
  ];

  increment(item: CartItem): void {
    item.amount++;
  }

  decrement(item: CartItem): void {
    if (item.amount > 1) {
      item.amount--;
    }
  }

  toggleSelection(item: CartItem): void {
    item.selected = !item.selected;
  }

  callManageDeleteComponent(): void {
    window.location.href = 'http://localhost:4200/phone_shoppingListDelete';
  }
}

