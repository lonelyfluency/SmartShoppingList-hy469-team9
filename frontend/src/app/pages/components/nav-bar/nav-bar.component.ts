import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/global/services/cart/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnDestroy {
  cartItemCount: number = 0;
  private cartSubscription: Subscription;

  constructor(private router: Router, private cartService: CartService) {
    this.cartSubscription = this.cartService.cartItems$.subscribe(
      items => {
        this.cartItemCount = items.length;
      }
    );
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }
}
