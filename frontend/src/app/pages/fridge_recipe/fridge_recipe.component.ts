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

  selectedItems: CartItem[] = [];

  toggleSelection(item: CartItem): void {
    item.selected = !item.selected;

    if (item.selected) {
      this.selectedItems.push(item);
    } else {
      this.selectedItems = this.selectedItems.filter(selectedItem => selectedItem !== item);
    }
  }

  sendMessageToUser(): void {
    if (this.selectedItems.length > 0) {
      const selectedItemsNames = this.selectedItems.map(selectedItem => selectedItem.name).join(', ');
      alert(`Ingredients of ${selectedItemsNames} have been added to the list`);
    } else {
      alert('No recipe selected. Please select items first.');
    }
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
