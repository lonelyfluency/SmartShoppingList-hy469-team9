import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPopupComponent } from './detail_popup.component';

describe('DetailPopupComponent', () => {
  let component: DetailPopupComponent;
  let fixture: ComponentFixture<DetailPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailPopupComponent]
    });
    fixture = TestBed.createComponent(DetailPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
