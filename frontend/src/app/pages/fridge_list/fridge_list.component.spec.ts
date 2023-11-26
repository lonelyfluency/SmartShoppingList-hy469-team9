import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FridgeListComponent } from './fridge_list.component';

describe('FridgeListComponent', () => {
  let component: FridgeListComponent;
  let fixture: ComponentFixture<FridgeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FridgeListComponent]
    });
    fixture = TestBed.createComponent(FridgeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
