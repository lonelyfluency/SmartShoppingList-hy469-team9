import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneSignComponent } from './phone_sign.component';

describe('PhoneSignComponent', () => {
  let component: PhoneSignComponent;
  let fixture: ComponentFixture<PhoneSignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhoneSignComponent]
    });
    fixture = TestBed.createComponent(PhoneSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
