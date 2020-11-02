import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.less']
})
export class ActionBarComponent implements OnInit {
  public basicBarOptions = [
    { name: 'Kreator', url: '', active: true },
    { name: 'Bohaterowie', url: '', active: false },
  ];

  public barOptions = [
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

}
