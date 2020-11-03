import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

export interface BarOptionsInterface {
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
  @Input() public options: BarOptionsInterface[]  = [];
  @Output() public settingsEmit = new EventEmitter<BarOptionsInterface>();

  // public barOptions: BarOptionsInterface[] = [
  //   { id: 1, name: 'Podstawowe', url: '', active: true },
  //   { id: 2, name: 'Atrybuty', url: '', active: false },
  //   { id: 3, name: 'Klasa', url: '', active: false },
  //   { id: 4, name: 'Umiejętności', url: '', active: false },
  //   { id: 5, name: 'Ekwipunek', url: '', active: false },
  //   { id: 6, name: 'Podsumowanie', url: '', active: false },
  // ];

  constructor() { }

  ngOnInit() {
  }

  public setHandler(option: BarOptionsInterface ): void {
    this.settingsEmit.next(option);
  }
}
