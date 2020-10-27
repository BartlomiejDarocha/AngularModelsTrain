import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RTCAttributesComponent } from './rtcattributes.component';

describe('RTCAttributesComponent', () => {
  let component: RTCAttributesComponent;
  let fixture: ComponentFixture<RTCAttributesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RTCAttributesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RTCAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
