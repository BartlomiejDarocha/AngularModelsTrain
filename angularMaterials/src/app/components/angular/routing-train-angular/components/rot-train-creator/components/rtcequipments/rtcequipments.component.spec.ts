import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RTCEquipmentsComponent } from './rtcequipments.component';

describe('RTCEquipmentsComponent', () => {
  let component: RTCEquipmentsComponent;
  let fixture: ComponentFixture<RTCEquipmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RTCEquipmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RTCEquipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
