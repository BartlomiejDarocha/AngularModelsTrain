import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotTrainSummaryComponent } from './rot-train-summary.component';

describe('RotTrainSummaryComponent', () => {
  let component: RotTrainSummaryComponent;
  let fixture: ComponentFixture<RotTrainSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotTrainSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotTrainSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
