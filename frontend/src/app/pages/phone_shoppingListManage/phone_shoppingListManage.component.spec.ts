import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneShoppingListManageComponent } from './phone_shoppingListManage.component';

describe('PhoneShoppingListManageComponent', () => {
  let component: PhoneShoppingListManageComponent;
  let fixture: ComponentFixture<PhoneShoppingListManageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhoneShoppingListManageComponent]
    });
    fixture = TestBed.createComponent(PhoneShoppingListManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
