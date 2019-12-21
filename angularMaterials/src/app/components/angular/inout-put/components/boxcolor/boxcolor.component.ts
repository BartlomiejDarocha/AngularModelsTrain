import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-boxcolor',
  templateUrl: './boxcolor.component.html',
  styleUrls: ['./boxcolor.component.less']
})
export class BoxcolorComponent implements OnInit, OnChanges {
  @Input() public boxStats: any;
  @Input() public otherBoxes: Array<any>;
  @Output() public infects = new EventEmitter<any>();
  public backGroundColor = '';
  constructor() {}
  ngOnInit(): void {
    this.backGroundColor = this.boxStats.color;
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes, 'changes');
    console.log(changes.boxStats.currentValue.infectedColor, 'changes.boxStats.currentValue.infectedColor');
    if (changes.boxStats.currentValue.infectedColor) {
      console.log('111111');
    }
  }

  public infectHandler(id: number) {
    this.infects.next({color: this.boxStats.color, targetId: id, infectorId: this.boxStats.id});
  }

}
