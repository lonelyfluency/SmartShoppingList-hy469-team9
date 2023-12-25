import { Component } from '@angular/core';

@Component({
  selector: 'app-personalInfo',
  templateUrl: './phone_personalInfo.component.html',
  styleUrls: ['./phone_personalInfo.component.scss']
})
export class PhonePersonalInfoComponent {

  goToPhoneInterests(){
    window.location.href = 'http://localhost:4200/phone_interests';
  }

}
