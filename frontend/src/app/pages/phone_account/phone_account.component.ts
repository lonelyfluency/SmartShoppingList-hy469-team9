import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone_account',
  templateUrl: './phone_account.component.html',
  styleUrls: ['./phone_account.component.scss']
})

export class PhoneAccountComponent {
  constructor(private router: Router) {}
  goToListPage(): void {
    this.router.navigate(['/phone_shoppingListManage']);
  }
  goQrCodeScanPage(): void {
    this.router.navigate(['/phone_qrcode']);
  }
  goCartPage(): void {
    this.router.navigate(['/phone_cart']);
  }
  goToEditProfilePage(): void {
    this.router.navigate(['/phone_editProfile']);
  }
  goToShopHistoryPage(): void {
    this.router.navigate(['/phone_shopHistory']);
  }
  goToCardPaymentPage(): void {
    this.router.navigate(['/phone_payment']);
  }
  goToShopLocationPage(): void {
    this.router.navigate(['/phone_shopLocation']);
  }
}
