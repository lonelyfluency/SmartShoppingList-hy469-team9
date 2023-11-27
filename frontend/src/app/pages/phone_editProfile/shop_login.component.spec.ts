import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneEditProfileComponent } from './shop_login.component';

describe('PhoneEditProfileComponent', () => {
  let component: PhoneEditProfileComponent;
  let fixture: ComponentFixture<PhoneEditProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhoneEditProfileComponent]
    });
    fixture = TestBed.createComponent(PhoneEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
