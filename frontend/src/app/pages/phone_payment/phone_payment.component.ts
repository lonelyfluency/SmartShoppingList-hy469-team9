import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone_payment',
  templateUrl: './phone_payment.component.html',
  styleUrls: ['./phone_payment.component.scss']
})
export class PhonePaymentComponent {

  constructor(private router: Router) {}
  goToAccountPage(): void {
    this.router.navigate(['/phone_account']);
  }

}
