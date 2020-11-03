import { Component, OnInit, EventEmitter, Output } from '@angular/core';

interface BarOptionsInterface {
  id: number;
  name: string;
  url: string;
  active: boolean;
}

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.less']
})

export class ActionBarComponent implements OnInit {
  @Output() public settingsEmit = new EventEmitter<string>();

  public showBottonBar = true;
  public basicBarOptions: BarOptionsInterface[] = [
    { id: 1, name: 'Kreator', url: '', active: true },
    { id: 2, name: 'Bohaterowie', url: '', active: false },
  ];

  public barOptions: BarOptionsInterface[] = [
    { id: 1, name: 'Podstawowe', url: '', active: true },
    { id: 2, name: 'Atrybuty', url: '', active: false },
    { id: 3, name: 'Klasa', url: '', active: false },
    { id: 4, name: 'Umiejętności', url: '', active: false },
    { id: 5, name: 'Ekwipunek', url: '', active: false },
    { id: 6, name: 'Podsumowanie', url: '', active: false },
  ];

  constructor() { }

  ngOnInit() {
  }

  public setHandler(index: number, table: string): void {
    this[table] = this[table].map((el: BarOptionsInterface) => el = {...el, active: false});
    this[table][index]['active'] = true;
    if (table === 'basicBarOptions') {
      if (this[table][index]['id'] === 2) {
        this.showBottonBar = false;
      } else {
        this.showBottonBar = true;
      }
    }
    this.settingsEmit.next(this[table][index]['url']);
  }
}
