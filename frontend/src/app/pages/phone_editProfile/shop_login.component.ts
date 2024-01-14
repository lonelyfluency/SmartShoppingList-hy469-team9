import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone_editProfile',
  templateUrl: './phone_editProfile.component.html',
  styleUrls: ['./shop_login.component.scss']
})
export class PhoneEditProfileComponent {
  constructor(private router: Router) {}

  goToAccountPage(): void {
    this.router.navigate(['/phone_account']);
  }
}
