import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RTCBasicComponent } from './rtcbasic.component';

describe('RTCBasicComponent', () => {
  let component: RTCBasicComponent;
  let fixture: ComponentFixture<RTCBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RTCBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RTCBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
