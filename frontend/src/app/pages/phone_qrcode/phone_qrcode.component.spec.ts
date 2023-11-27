import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneQrCodeComponent } from './phone_qrcode.component';

describe('PhoneQrCodeComponent', () => {
  let component: PhoneQrCodeComponent;
  let fixture: ComponentFixture<PhoneQrCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhoneQrCodeComponent]
    });
    fixture = TestBed.createComponent(PhoneQrCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
