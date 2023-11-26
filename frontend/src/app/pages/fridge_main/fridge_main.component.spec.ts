import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FridgeMainComponent } from './fridge_main.component';

describe('FridgeMainComponent', () => {
  let component: FridgeMainComponent;
  let fixture: ComponentFixture<FridgeMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FridgeMainComponent]
    });
    fixture = TestBed.createComponent(FridgeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
