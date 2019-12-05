import { Component, Inject } from '@angular/core';
import { NameAndColor } from 'src/app/models/dialogs.models';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-input-dialog',
  templateUrl: './input-dialog.component.html',
  styleUrls: ['./input-dialog.component.less']
})
export class InputDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<InputDialogComponent>, // zwraca dane z inputa itp
    @Inject(MAT_DIALOG_DATA) public data: NameAndColor // przyjmuje dane najlepiej model
    ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
