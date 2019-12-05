import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstConfirmDialogComponent } from './const-confirm-dialog.component';

describe('ConstConfirmDialogComponent', () => {
  let component: ConstConfirmDialogComponent;
  let fixture: ComponentFixture<ConstConfirmDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstConfirmDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
