import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FridgeRecipeComponent } from './fridge_recipe.component';

describe('FridgeRecipeComponent', () => {
  let component: FridgeRecipeComponent;
  let fixture: ComponentFixture<FridgeRecipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FridgeRecipeComponent]
    });
    fixture = TestBed.createComponent(FridgeRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
