import { Component } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  public title = 'AngularMaterials';
  // data NgbDateStruct model jaki przyjmuje data czyli : {year: number, month: number: day: number}
  public dataModel: NgbDateStruct;
  // po to by funkcja navigateTo mogla dopisać zmienie do pol w obiekcie
  public date: { year: number, month: number };

  constructor(
    private calendar: NgbCalendar,
  ) {}

   public selectToday() {
    // calendar service z przydatnymi funkcjami,
    this.dataModel = this.calendar.getToday();
    console.log(this.dataModel, 'dataModel');
  }
  test() {
    console.log('tests');
  }

}
