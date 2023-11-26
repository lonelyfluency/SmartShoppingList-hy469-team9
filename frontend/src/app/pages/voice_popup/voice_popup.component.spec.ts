import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoicePopupComponent } from './voice_popup.component';

describe('VoicePopupComponent', () => {
  let component: VoicePopupComponent;
  let fixture: ComponentFixture<VoicePopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoicePopupComponent]
    });
    fixture = TestBed.createComponent(VoicePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
