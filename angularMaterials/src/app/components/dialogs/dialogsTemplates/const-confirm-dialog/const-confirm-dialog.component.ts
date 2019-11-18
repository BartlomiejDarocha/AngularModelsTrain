import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-const-confirm-dialog',
  templateUrl: './const-confirm-dialog.component.html',
  styleUrls: ['./const-confirm-dialog.component.less']
})
export class ConstConfirmDialogComponent implements OnInit {

  public conetnTest = {
    contentTrue: 'contentTrue',
    contentFalse: 'contentFalse'
  };
  constructor() { }

  ngOnInit() {
  }

}
