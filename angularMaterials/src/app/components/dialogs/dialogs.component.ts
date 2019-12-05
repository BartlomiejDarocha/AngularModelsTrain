import { Component} from '@angular/core';
import { MatDialog } from '@angular/material'; // do stworzenie funkci odp za dialog
import {SimpleDialogTemplateComponent} from '../dialogs/dialogsTemplates/simple-dialog-template/simple-dialog-template.component'; //  jw
import { DialogData } from 'src/app/models/dialogs.models'; // do przekazania agrumenut
import { DialogService } from 'src/app/providers/dialog.service';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.less']
})
export class DialogsComponent {
  public dialogInputname = '';
  public msg1 = {
    header: 'Wiadomość1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat similique sequi quas, ipsa quae architecto?'
  };
  public msg2 = {
    header: 'Wiadomość2',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat similique sequi quas, ipsa quae architecto?'
  };
  constructor(public dialogService: DialogService) {}
}
