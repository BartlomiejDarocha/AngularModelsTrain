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
  constructor() { }

  ngOnInit() {
  }

  public setHandler(option: BarOptionsInterface ): void {
    this.settingsEmit.next(option);
  }
}
