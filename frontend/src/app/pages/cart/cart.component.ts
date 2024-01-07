import { Component, OnInit } from '@angular/core';
import { CartItemModel } from 'src/app/global/models/cart/cart.model';
import { CartService } from 'src/app/global/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public cartItems: CartItemModel[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCartItems();
  }

  private loadCartItems(): void {
    this.cartService.getAll().subscribe(
      items => this.cartItems = items,
      error => console.error('Error fetching cart items', error)
    );
  }

  // Add additional methods as needed
}
