import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotTrainCreatorComponent } from './rot-train-creator.component';

describe('RotTrainCreatorComponent', () => {
  let component: RotTrainCreatorComponent;
  let fixture: ComponentFixture<RotTrainCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotTrainCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotTrainCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
