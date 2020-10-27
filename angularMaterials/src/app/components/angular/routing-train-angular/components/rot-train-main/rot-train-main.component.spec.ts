import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotTrainMainComponent } from './rot-train-main.component';

describe('RotTrainMainComponent', () => {
  let component: RotTrainMainComponent;
  let fixture: ComponentFixture<RotTrainMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotTrainMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotTrainMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
