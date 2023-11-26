import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopMainComponent } from './shop_main.component';

describe('ShopMainComponent', () => {
  let component: ShopMainComponent;
  let fixture: ComponentFixture<ShopMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopMainComponent]
    });
    fixture = TestBed.createComponent(ShopMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
