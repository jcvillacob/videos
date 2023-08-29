import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrosVideosComponent } from './otros-videos.component';

describe('OtrosVideosComponent', () => {
  let component: OtrosVideosComponent;
  let fixture: ComponentFixture<OtrosVideosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtrosVideosComponent]
    });
    fixture = TestBed.createComponent(OtrosVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
