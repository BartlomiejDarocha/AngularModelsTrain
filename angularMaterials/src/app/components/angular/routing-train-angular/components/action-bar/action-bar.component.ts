import { Component, OnInit } from '@angular/core';

interface BarOptionsInterface {
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
  public basicBarOptions: BarOptionsInterface[] = [
    { name: 'Kreator', url: '', active: true },
    { name: 'Bohaterowie', url: '', active: false },
  ];

  public barOptions: BarOptionsInterface[] = [
    { name: 'Podstawowe', url: '', active: true },
    { name: 'Atrybuty', url: '', active: false },
    { name: 'Klasa', url: '', active: false },
    { name: 'Umiejętności', url: '', active: false },
    { name: 'Ekwipunek', url: '', active: false },
    { name: 'podsumowanie', url: '', active: false },
  ];

  constructor() { }

  ngOnInit() {
  }

  public setHandler(index: number, table: 'string'): void {
    this[table] = this[table].map((el: BarOptionsInterface) => el = {...el, active: false});
    this[table][index]['active'] = true;
  }

}
