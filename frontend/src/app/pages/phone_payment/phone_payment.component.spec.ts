import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonePaymentComponent } from './phone_payment.component';

describe('PhonePaymentComponent', () => {
  let component: PhonePaymentComponent;
  let fixture: ComponentFixture<PhonePaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhonePaymentComponent]
    });
    fixture = TestBed.createComponent(PhonePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
