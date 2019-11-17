import { Injectable } from '@angular/core';
// tslint:disable-next-line:max-line-length
import {SimpleDialogTemplateComponent} from '../components/dialogs/dialogsTemplates/simple-dialog-template/simple-dialog-template.component';
import { DialogData } from 'src/app/models/dialogModels/dialogs.models';
import { MatDialog } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) {}
  openSimpleDialog(message: DialogData) {
    this.dialog.open(SimpleDialogTemplateComponent, {
      data: message
    });
  }
}
