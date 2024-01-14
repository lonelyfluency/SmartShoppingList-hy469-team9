import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone_interests',
  templateUrl: './phone_interests.component.html',
  styleUrls: ['./phone_interests.component.scss']
})
export class PhoneInterestsComponent {

  constructor(private router: Router) {}
  goToPersonalInfoPage(): void {
    this.router.navigate(['/phone_personalInfo']);
  }
}
