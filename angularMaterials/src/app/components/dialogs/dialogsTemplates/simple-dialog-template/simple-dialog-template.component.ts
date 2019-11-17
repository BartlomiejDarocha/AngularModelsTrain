import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from 'src/app/models/dialogModels/dialogs.models';

@Component({
  selector: 'app-simple-dialog-template',
  templateUrl: './simple-dialog-template.component.html',
  styleUrls: ['./simple-dialog-template.component.less']
})
export class SimpleDialogTemplateComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}


}
