import { Component } from '@angular/core';

@Component({
  selector: 'app-phone_shopLocation',
  templateUrl: './phone_shopLocation.component.html',
  styleUrls: ['./phone_shopLocation.component.scss']
})
export class PhoneShopLocationComponent {
  goToAccountPage(): void {
    window.location.href = 'http://localhost:4200/phone_account';
  }
}
