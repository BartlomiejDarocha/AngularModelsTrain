import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-boxcolor',
  templateUrl: './boxcolor.component.html',
  styleUrls: ['./boxcolor.component.less']
})
export class BoxcolorComponent implements OnInit, OnChanges {
  @Input() public orginColor: string;
  @Input() public id: number;
  @Input() public otherBoxes: Array<any>;
  @Input() public infected: any;
  @Output() public infects = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes, 'changes', this.id);
    // if (!changes.infected.firstChange) {
    //   console.log('nie pierwsza zmiana');
    //   if (changes.infected.currentValue) {
    //     console.log(changes.infected.currentValue.color, 'currentValue');
    //   } else {
    //     console.log(changes.infected.previousValue.color, 'previousValue');
    //   }
    //   //this.orginColor = changes.infected.currentValue.color;
    // }
  }
  public infectHandler(id: number) {
    this.infects.next({color: this.orginColor, targetId: id, infectorId: this.id});
  }

}
