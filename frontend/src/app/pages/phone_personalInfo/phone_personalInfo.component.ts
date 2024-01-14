import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personalInfo',
  templateUrl: './phone_personalInfo.component.html',
  styleUrls: ['./phone_personalInfo.component.scss']
})
export class PhonePersonalInfoComponent {
  constructor(private router: Router) {}

  goToPhoneInterests(): void {
    this.router.navigate(['/phone_interests']);
  }

}
