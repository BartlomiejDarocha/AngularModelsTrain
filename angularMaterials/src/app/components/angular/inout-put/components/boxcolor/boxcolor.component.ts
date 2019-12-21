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
  ngOnChanges(changes: SimpleChanges): void {
    this.backGroundColor = this.boxStats.color;
    console.log(changes, 'changes');
    if (changes.boxStats.currentValue.infectedColor) {
      this.backGroundColor = changes.boxStats.currentValue.infectedColor;
    }
  }
  ngOnInit(): void {
    console.log('odpalam się za każdą zmiana!');
    console.log(this.backGroundColor, 'bg ON init');
  }
  public infectHandler(id: number) {
    this.infects.next({color: this.boxStats.color, targetId: id, infectorId: this.boxStats.id});
  }

}
