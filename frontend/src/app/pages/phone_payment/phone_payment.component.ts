import { Component } from '@angular/core';

@Component({
  selector: 'app-phone_payment',
  templateUrl: './phone_payment.component.html',
  styleUrls: ['./phone_payment.component.scss']
})
export class PhonePaymentComponent {

  goToAccountPage(): void {
    window.location.href = 'http://localhost:4200/phone_account';
  }

}
