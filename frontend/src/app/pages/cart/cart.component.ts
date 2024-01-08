import { Component, OnInit } from '@angular/core';
import { CartItemModel } from 'src/app/global/models/cart/cart.model';
import { CartService } from 'src/app/global/services/cart/cart.service';
import { SocketsService } from 'src/app/global/services/sockets/sockets.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public cartItems: CartItemModel[] = [];
  public paymentMethods = [
    { name: 'Saved Card', selected: false },
    { name: 'Real Card', selected: false },
    { name: 'NFC', selected: false },
    { name: 'Cash', selected: false },
  ];

  constructor(
    private cartService: CartService,
    private SocketService: SocketsService
  ) {}

  ngOnInit(): void {
    this.loadCartItems();
    this.subscribeToCartUpdates();
  }

  private loadCartItems(): void {
    this.cartService.getAll().subscribe(
      items => this.cartItems = items,
      error => console.error('Error fetching cart items', error)
    );
  }

  private subscribeToCartUpdates(): void {
    this.SocketService.getCartUpdates((updatedCart: CartItemModel[]) => {
      this.cartItems = updatedCart;
    });
  }

  increment(item: CartItemModel): void {
    item.Amount++;
    this.cartService.update(item._id, item).subscribe();
  }

  decrement(item: CartItemModel): void {
    if (item.Amount > 1) {
      item.Amount--;
      this.cartService.update(item._id, item).subscribe();
    }
  }

  toggleSelection(item: CartItemModel): void {
    item.selected = !item.selected;
  }

  deleteSelectedItems(): void {
    this.cartItems.forEach(item => {
      if (item.selected) {
        this.cartService.delete(item._id).subscribe();
      }
    });
    this.cartItems = this.cartItems.filter(item => !item.selected);
  }

  selectPaymentMethod(selectedMethod: any): void {
    this.paymentMethods.forEach(method => {
      method.selected = false;
    });
    selectedMethod.selected = true;
  }

  getTotalPrice(): number {
    const total = this.cartItems.reduce((acc, item) => acc + (item.Amount * item.Price), 0);
    return parseFloat(total.toFixed(2));
  }

  proceedToCheckout(): void {
    // Implement checkout logic
  }
}
