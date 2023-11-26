import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopLoginComponent } from './shop_login.component';

describe('ShopLoginComponent', () => {
  let component: ShopLoginComponent;
  let fixture: ComponentFixture<ShopLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopLoginComponent]
    });
    fixture = TestBed.createComponent(ShopLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
