import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone_shopLocation',
  templateUrl: './phone_shopLocation.component.html',
  styleUrls: ['./phone_shopLocation.component.scss']
})
export class PhoneShopLocationComponent {
  constructor(private router: Router) {}
  goToAccountPage(): void {
    this.router.navigate(['/phone_account']);
  }
}
