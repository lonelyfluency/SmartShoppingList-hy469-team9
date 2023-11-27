import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneShoppingListDeleteComponent } from './phone_shoppingListDelete.component';

describe('PhoneShoppingListDeleteComponent', () => {
  let component: PhoneShoppingListDeleteComponent;
  let fixture: ComponentFixture<PhoneShoppingListDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhoneShoppingListDeleteComponent]
    });
    fixture = TestBed.createComponent(PhoneShoppingListDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
