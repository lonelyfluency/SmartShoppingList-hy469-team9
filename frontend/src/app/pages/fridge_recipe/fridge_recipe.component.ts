import { Component } from '@angular/core';

interface CartItem {
  imageUrl: string;
  name: string;
  selected: boolean;
}

@Component({
  selector: 'app-fridge_recipe',
  templateUrl: './fridge_recipe.component.html',
  styleUrls: ['./fridge_recipe.component.scss']
})
export class FridgeRecipeComponent {

  cartItems: CartItem[] = [
    { name: 'Crepe', imageUrl: '../../../../assets/items/Crepe.jpg',  selected: false },
    { name: 'Gyros', imageUrl: '../../../../assets/items/Lamb_Gyros_Sydney.jpg',  selected: false },
    { name: 'Pizza', imageUrl: '../../../../assets/items/lanotte.jpeg',  selected: false },
    { name: 'IceCream', imageUrl: '../../../../assets/items/ice_Cream.jpg',  selected: false }
  ];

  toggleSelection(item: CartItem): void {
    item.selected = !item.selected;
  }

  callManageDeleteComponent(): void {
    window.location.href = 'http://localhost:4200/phone_shoppingListDelete';
  }

  goToAccountPage(): void {
    window.location.href = 'http://localhost:4200/phone_account';
  }

  goToFridgeMain(): void {
    window.location.href = 'http://localhost:4200/fridge_main';
  }

}
