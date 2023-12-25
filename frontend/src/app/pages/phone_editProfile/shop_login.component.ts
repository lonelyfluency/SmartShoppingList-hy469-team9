import { Component } from '@angular/core';

@Component({
  selector: 'app-phone_editProfile',
  templateUrl: './phone_editProfile.component.html',
  styleUrls: ['./shop_login.component.scss']
})
export class PhoneEditProfileComponent {
  goToAccountPage(): void {
    window.location.href = 'http://localhost:4200/phone_account';
  }
}
