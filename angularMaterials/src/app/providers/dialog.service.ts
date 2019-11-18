import { Injectable } from '@angular/core';
// tslint:disable-next-line:max-line-length
import {SimpleDialogTemplateComponent} from '../components/dialogs/dialogsTemplates/simple-dialog-template/simple-dialog-template.component';
import {ConstConfirmDialogComponent} from '../components/dialogs/dialogsTemplates/const-confirm-dialog/const-confirm-dialog.component';
import { DialogData } from 'src/app/models/dialogModels/dialogs.models';
import { MatDialog } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) {}
  public openSimpleDialog(message: DialogData) {
    this.dialog.open(SimpleDialogTemplateComponent, {
      data: message
    });
  }
  public openConfirmDialog() {
    const dialogReference = this.dialog.open(ConstConfirmDialogComponent);
    dialogReference.afterClosed().subscribe(result => {
      console.log(result, 'wynik');
      // mozna wynik dopisać do zmiennej w funkcji i ten wynik zwrócić by uczynić z tego bardziej ogólną funckje,
      // można również w argumencie przekazać componenent tak żeby funkcja była jeszcze bardziej ogólna
    });
  }
}
