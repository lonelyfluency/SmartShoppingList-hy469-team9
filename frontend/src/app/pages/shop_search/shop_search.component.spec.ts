import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopSearchComponent } from './shop_search.component';

describe('ShopSearchComponent', () => {
  let component: ShopSearchComponent;
  let fixture: ComponentFixture<ShopSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopSearchComponent]
    });
    fixture = TestBed.createComponent(ShopSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
