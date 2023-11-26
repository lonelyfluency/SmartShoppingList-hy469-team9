import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualTryonComponent } from './virtual_tryon.component';

describe('VirtualTryonComponent', () => {
  let component: VirtualTryonComponent;
  let fixture: ComponentFixture<VirtualTryonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VirtualTryonComponent]
    });
    fixture = TestBed.createComponent(VirtualTryonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
