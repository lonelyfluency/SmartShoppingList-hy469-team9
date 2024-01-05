import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FridgeShoppingListDeleteComponent } from './fridge_shoppingListDelete.component';

describe('FridgeShoppingListDeleteComponent', () => {
  let component: FridgeShoppingListDeleteComponent;
  let fixture: ComponentFixture<FridgeShoppingListDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FridgeShoppingListDeleteComponent]
    });
    fixture = TestBed.createComponent(FridgeShoppingListDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
