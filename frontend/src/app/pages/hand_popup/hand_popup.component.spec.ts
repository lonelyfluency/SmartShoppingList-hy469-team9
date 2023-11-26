import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandPopupComponent } from './hand_popup.component';

describe('HandPopupComponent', () => {
  let component: HandPopupComponent;
  let fixture: ComponentFixture<HandPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HandPopupComponent]
    });
    fixture = TestBed.createComponent(HandPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
