import { Component, ViewChild } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { MatSidenav } from '@angular/material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  public menuList = [
    { name: 'Home', url: 'home' },
    { name: 'Angular', url: 'angular' },
    { name: 'Angular Materials', url: '' },
  ];
  // zaszłość
  public title = 'AngularMaterials';
  // data NgbDateStruct model jaki przyjmuje data czyli : {year: number, month: number: day: number}
  public dataModel: NgbDateStruct;
  // po to by funkcja navigateTo mogla dopisać zmienie do pol w obiekcie
  public date: { year: number, month: number };
  // zaszłosć
  constructor(
    private calendar: NgbCalendar,
  ) { }
  public openMenu(value: boolean): void {
    if (value) {
      this.sidenav.open();
    }
  }
  public mobileMenuHandler(value: boolean) {
    if (value) {
      this.closeMenu();
    }
  }
  public closeMenu(): void {
    this.sidenav.close();
  }

  public selectToday() {
    // calendar service z przydatnymi funkcjami,
    this.dataModel = this.calendar.getToday();
    console.log(this.dataModel, 'dataModel');
  }

}
