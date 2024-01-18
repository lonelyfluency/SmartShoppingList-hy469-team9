import { Component, OnInit } from '@angular/core';
import { CartItemModel } from 'src/app/global/models/cart/cart.model';
import { CartService } from 'src/app/global/services/cart/cart.service';
import { SocketsService } from 'src/app/global/services/sockets/sockets.service';

@Component({
  selector: 'app-cart-phone',
  templateUrl: './cart_phone.component.html',
  styleUrls: ['./cart_phone.component.scss']
})
export class CartPhoneComponent implements OnInit {
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
    // this.loadCartItems();
    this.subscribeToCartUpdates();
    // Subscribe to the BehaviorSubject to get real-time updates
    this.cartService.cartItems$.subscribe(
      items => this.cartItems = items,
      error => console.error('Error fetching cart items', error)
    );
    // Initialize the cart
    this.cartService.initializeCart();
  }

  private subscribeToCartUpdates(): void {
    this.SocketService.getCartUpdates((updatedCart: CartItemModel[]) => {
      this.cartItems = updatedCart;
    });
  }

  increment(item: CartItemModel): void {
    item.Amount++;
    this.cartService.update(item._id, item).subscribe();
    item.selected = !item.selected;
  }

  decrement(item: CartItemModel): void {
    if (item.Amount > 1) {
      item.Amount--;
      this.cartService.update(item._id, item).subscribe();
      item.selected = !item.selected;
    }
  }

  toggleSelection(item: CartItemModel): void {
    item.selected = !item.selected;
  }

  deleteSelectedItems(): void {
    this.cartItems.forEach(item => {
      if (item.selected) {
        this.cartService.delete(item._id).subscribe();
        // alert(`Successfully deleted ${item.Name}.`); // Show an alert
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
    this.paymentMethods.forEach(method =>{
      if (method.selected) {
        alert(`Payment completed with ${method.name}.`); // Show an alert
      }
    })
  }
}
