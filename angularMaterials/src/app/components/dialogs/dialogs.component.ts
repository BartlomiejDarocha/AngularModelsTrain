import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
//import {DialogData} from '../../models/dialogModels/dialogs.models';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.less']
})
export class DialogsComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }
  // openDialog() {
  //   this.dialog.open(DialogDataExampleDialog, {
  //     data: {
  //       animal: 'pies'
  //     }
  //   });
  // }

}
