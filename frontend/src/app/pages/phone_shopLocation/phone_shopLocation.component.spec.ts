import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneShopLocationComponent } from './phone_shopLocation.component';

describe('PhoneShopLocationComponent', () => {
  let component: PhoneShopLocationComponent;
  let fixture: ComponentFixture<PhoneShopLocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhoneShopLocationComponent]
    });
    fixture = TestBed.createComponent(PhoneShopLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
