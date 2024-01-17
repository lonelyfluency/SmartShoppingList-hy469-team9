import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() { }

  goToShopMain(): void {
    this.router.navigate(['/shop/shop_main']);
  }

  goToFridgeMain(): void {
    this.router.navigate(['/fridge_main']);
  }

  goToPhoneApp(): void {
    this.router.navigate(['/phone_account']);
  }

}
