import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boxcolor',
  templateUrl: './boxcolor.component.html',
  styleUrls: ['./boxcolor.component.less']
})
export class BoxcolorComponent implements OnInit {
  @Input() public boxStats: any;
  @Input() public otherBoxes: Array<any>;
  @Output() public infects = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    console.log(this.boxStats, 'statistic');
  }

  public infectHandler(id: number) {
    this.infects.next({color: this.boxStats.color, targetId: id, infectorId: this.boxStats.id});
  }

}
