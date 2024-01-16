import { Component } from '@angular/core';
import { ShoppinglistService } from 'src/app/global/services/shoppinglist/shoppinglist.service';
import { CartService } from 'src/app/global/services/cart/cart.service';
import { CartItemModel } from 'src/app/global/models/cart/cart.model';

@Component({
  selector: 'app-shop_main',
  templateUrl: './shop_main.component.html',
  styleUrls: ['./shop_main.component.scss']
})
export class ShopMainComponent {
  constructor(
    private shoppinglistService: ShoppinglistService,
    private cartService: CartService
  ) {}

  addToCart(): void {
    const selectedItems = this.shoppinglistService.getSelectedItems();
    selectedItems.forEach(item => {
      const cartItem = new CartItemModel({
        NameID: item.NameID,
        Name: item.Name,
        Price: item.Price,
        Amount: 1,
        ImagePath: item.ImagePath,
        selected: false
      });

      this.cartService.add(cartItem).subscribe(
        () => {
          console.log(`Successfully added ${item.Name} to the cart`);
          // alert(`Successfully added ${item.Name} to the cart`);
        },
        error => {
          console.error('Error adding item to cart', error);
        }
      );
    });
  }
}
