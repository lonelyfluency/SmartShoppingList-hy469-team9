import { Component } from '@angular/core';

@Component({
  selector: 'app-phone_account',
  templateUrl: './phone_account.component.html',
  styleUrls: ['./phone_account.component.scss']
})

export class PhoneAccountComponent {
  goToListPage(): void {
    window.location.href = 'http://localhost:4200/phone_shoppingListManage';
  }
  goQrCodeScanPage(): void {
    window.location.href = 'http://localhost:4200/phone_qrcode';
  }
  goCartPage(): void {
    window.location.href = 'http://localhost:4200/phone_cart';
  }
  goToEditProfilePage(): void {
    window.location.href = 'http://localhost:4200/phone_editProfile';
  }
  goToShopHistoryPage(): void {
    window.location.href = 'http://localhost:4200/phone_shopHistory';
  }
  goToCardPaymentPage(): void {
    window.location.href = 'http://localhost:4200/phone_payment';
  }
  goToShopLocationPage(): void {
    window.location.href = 'http://localhost:4200/phone_shopLocation';
  }
}
