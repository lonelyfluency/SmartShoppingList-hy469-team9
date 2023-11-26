import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FridgeCategoryComponent } from './fridge_category.component';

describe('FridgeCategoryComponent', () => {
  let component: FridgeCategoryComponent;
  let fixture: ComponentFixture<FridgeCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FridgeCategoryComponent]
    });
    fixture = TestBed.createComponent(FridgeCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
