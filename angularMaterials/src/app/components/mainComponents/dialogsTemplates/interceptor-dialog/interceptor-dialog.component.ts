import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { InterceptorError } from 'src/app/models/dialogs.models';

@Component({
  selector: 'app-interceptor-dialog',
  templateUrl: './interceptor-dialog.component.html',
  styleUrls: ['./interceptor-dialog.component.less']
})
export class InterceptorDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: InterceptorError) { }
}
