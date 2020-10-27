import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RTCskillsComponent } from './rtcskills.component';

describe('RTCskillsComponent', () => {
  let component: RTCskillsComponent;
  let fixture: ComponentFixture<RTCskillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RTCskillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RTCskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
