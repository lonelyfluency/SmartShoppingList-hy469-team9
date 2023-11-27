import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneShopHistoryComponent } from './phone_shopHistory.component';

describe('PhoneShopHistoryComponent', () => {
  let component: PhoneShopHistoryComponent;
  let fixture: ComponentFixture<PhoneShopHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhoneShopHistoryComponent]
    });
    fixture = TestBed.createComponent(PhoneShopHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
