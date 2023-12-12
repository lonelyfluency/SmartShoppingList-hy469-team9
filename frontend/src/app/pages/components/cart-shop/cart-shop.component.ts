import { Component } from '@angular/core';

interface CartItem {
  imageUrl: string;
  name: string;
  amount: number;
  price: number;
  selected: boolean;
}

@Component({
  selector: 'app-cart-shop',
  templateUrl: './cart-shop.component.html',
  styleUrls: ['./cart-shop.component.scss']
})

export class CartShopComponent {
  cartItems: CartItem[] = [
    { name: 'Wireless Rechargable Keyboard', amount: 2, imageUrl: '../../../../assets/shop_cart/keyboard.png', price: 40, selected: false },
    { name: 'Hudabeauty Bullet Lipstick', amount: 2, imageUrl: '../../../../assets/shop_cart/lipstick.png', price: 15, selected: false },
    { name: 'Vtamin C Cream', amount: 1, imageUrl: '../../../../assets/shop_cart/cream.png', price: 17, selected: false },
    { name: 'Leather Wallet', amount: 1, imageUrl: '../../../../assets/shop_cart/wallet.png', price: 30, selected: false },
    { name: 'Hibiscus Mushrooms', amount: 2, imageUrl: '../../../../assets/shop_cart/mushroom.png', price: 4, selected: false },
    { name: 'COSRX Ultra Moisturizing', amount: 1, imageUrl: '../../../../assets/shop_cart/moisture.png', price: 28, selected: false },
    { name: 'Mini Outdoor Wireless Speaker', amount: 1, imageUrl: '../../../../assets/shop_cart/minispeaker.png', price: 39, selected: false }

  ];

  paymentMethods: any[] = [
    { name: 'Saved Card', selected: false },
    { name: 'Real Card', selected: false },
    { name: 'NFC', selected: false },
    { name: 'Cash', selected: false },
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

  deleteSelectedItems(): void {
    this.cartItems = this.cartItems.filter(item => !item.selected);
  }

  selectPaymentMethod(selectedMethod: any): void {
    this.paymentMethods.forEach(method => {
      method.selected = false;
    });
    selectedMethod.selected = true;
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((acc, item) => acc + (item.amount * item.price), 0);
  }

  proceedToCheckout(): void {
    // Implement checkout logic
  }

}
