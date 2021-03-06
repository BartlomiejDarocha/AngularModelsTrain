import { Injectable } from '@angular/core';
import { DialogData, InterceptorError } from 'src/app/models/dialogs.models';
import { MatDialog } from '@angular/material';
// tslint:disable-next-line:max-line-length
import { SimpleDialogTemplateComponent } from '../components/dialogs/dialogsTemplates/simple-dialog-template/simple-dialog-template.component';
import { ConstConfirmDialogComponent } from '../components/dialogs/dialogsTemplates/const-confirm-dialog/const-confirm-dialog.component';
import { InputDialogComponent } from '../components/dialogs/dialogsTemplates/input-dialog/input-dialog.component';
import { InterceptorDialogComponent } from '../components/dialogs/dialogsTemplates/interceptor-dialog/interceptor-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private HttpDialogOpen = false;

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
  public openNameAndColorDialog(inputName: string) {
    let serviceColor = '';
    const dialogReferance = this.dialog.open(InputDialogComponent, {
      width: '250px',
      data: {
        name: inputName,
        color: serviceColor
      }
    });
    // to działa jak dissmis w Ionic
    dialogReferance.afterClosed().subscribe(result => {
      console.log(result, 'result dialog z inputem');
      serviceColor = result;
      // mozna wynik dopisać do zmiennej w funkcji i ten wynik zwrócić by uczynić z tego bardziej ogólną funckje,
      // można również w argumencie przekazać componenent tak żeby funkcja była jeszcze bardziej ogólna
    });
  }
  // interceptor dialogError
  public openInterceptorDialog(data: InterceptorError) {
    // if (this.HttpDialogOpen) {
    //   return false;
    // }
    this.dialog.open(InterceptorDialogComponent, {
      width: '300px',
      data: data,
    });
    // z odpowiedzi obslugą dialogu
  }
}
