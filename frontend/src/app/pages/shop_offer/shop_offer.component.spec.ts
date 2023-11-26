import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopOfferComponent } from './shop_offer.component';

describe('ShopOfferComponent', () => {
  let component: ShopOfferComponent;
  let fixture: ComponentFixture<ShopOfferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopOfferComponent]
    });
    fixture = TestBed.createComponent(ShopOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
