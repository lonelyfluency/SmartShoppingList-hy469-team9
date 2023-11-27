import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneAccountComponent } from './phone_account.component';

describe('PhoneAccountComponent', () => {
  let component: PhoneAccountComponent;
  let fixture: ComponentFixture<PhoneAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhoneAccountComponent]
    });
    fixture = TestBed.createComponent(PhoneAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
