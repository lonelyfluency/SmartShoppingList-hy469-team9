import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneMyCartDeleteComponent } from './phone_cart_delete.component';

describe('PhoneMyCartDeleteComponent', () => {
  let component: PhoneMyCartDeleteComponent;
  let fixture: ComponentFixture<PhoneMyCartDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhoneMyCartDeleteComponent]
    });
    fixture = TestBed.createComponent(PhoneMyCartDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
