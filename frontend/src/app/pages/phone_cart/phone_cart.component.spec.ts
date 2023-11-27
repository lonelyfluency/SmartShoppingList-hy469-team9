import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneCartComponent } from './phone_cart.component';

describe('PhoneCartComponent', () => {
  let component: PhoneCartComponent;
  let fixture: ComponentFixture<PhoneCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhoneCartComponent]
    });
    fixture = TestBed.createComponent(PhoneCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
