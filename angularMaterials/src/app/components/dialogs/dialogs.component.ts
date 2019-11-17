import { Component} from '@angular/core';
import { MatDialog } from '@angular/material';
import {SimpleDialogTemplateComponent} from '../dialogs/dialogsTemplates/simple-dialog-template/simple-dialog-template.component';
import { DialogData } from 'src/app/models/dialogModels/dialogs.models';
import { DialogService } from 'src/app/providers/dialog.service';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.less']
})
export class DialogsComponent {
  public msg1 = {
    header: 'Wiadomość1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat similique sequi quas, ipsa quae architecto?'
  };
  public msg2 = {
    header: 'Wiadomość2',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat similique sequi quas, ipsa quae architecto?'
  };
  constructor(public dialogService: DialogService) {}

  // constructor(public dialog: MatDialog) {}
  // openDialog(message: DialogData) {
  //   this.dialog.open(SimpleDialogTemplateComponent, {
  //     data: message
  //   });
  // }
}
