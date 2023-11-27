import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonePersonalInfoComponent } from './phone_personalInfo.component';

describe('PhonePersonalInfoComponent', () => {
  let component: PhonePersonalInfoComponent;
  let fixture: ComponentFixture<PhonePersonalInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhonePersonalInfoComponent]
    });
    fixture = TestBed.createComponent(PhonePersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
