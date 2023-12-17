import { Component } from '@angular/core';

@Component({
  selector: 'app-phone_interests',
  templateUrl: './phone_interests.component.html',
  styleUrls: ['./phone_interests.component.scss']
})
export class PhoneInterestsComponent {

  goToPersonalInfoPage(){
    window.location.href = 'http://localhost:4200/phone_personalInfo';
  }


}
