import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterceptorDialogComponent } from './interceptor-dialog.component';

describe('InterceptorDialogComponent', () => {
  let component: InterceptorDialogComponent;
  let fixture: ComponentFixture<InterceptorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterceptorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterceptorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
