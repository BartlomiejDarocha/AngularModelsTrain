import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RTCClassComponent } from './rtcclass.component';

describe('RTCClassComponent', () => {
  let component: RTCClassComponent;
  let fixture: ComponentFixture<RTCClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RTCClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RTCClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
