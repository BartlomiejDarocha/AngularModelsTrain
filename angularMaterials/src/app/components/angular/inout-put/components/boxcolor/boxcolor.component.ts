import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-boxcolor',
  templateUrl: './boxcolor.component.html',
  styleUrls: ['./boxcolor.component.less']
})
export class BoxcolorComponent implements OnInit, OnChanges, OnDestroy {
  @Input() public boxStats: any;
  @Input() public otherBoxes: Array<any>;
  @Output() public infects = new EventEmitter<any>();
  public backGroundColor = '';
  constructor() {}
  // ngOnChanges(changes: SimpleChanges): void {
  //   this.backGroundColor = this.boxStats.color;
    
  //   if (changes.boxStats.currentValue.infectedColor) {
  //     console.log('???',  changes.boxStats.currentValue.infectedColor);
      
  //     this.backGroundColor = changes.boxStats.currentValue.infectedColor;
  //     console.log(changes.boxStats.currentValue,'changes.boxStats.currentValue');
  //   }
  // }

  ngOnInit(): void {
    if (this.boxStats.infectedColor) {
      this.backGroundColor = this.boxStats.infectedColor;
    } else {
      this.backGroundColor = this.boxStats.color;
    }
    console.log(this.boxStats, 'boxStats');
    console.log(this.backGroundColor, 'bg ON init');
    // tu zrobiłem błąd on changes nie jest potrzebne, ponieważ te boxy są wyświeltanie za pomocą pętli a jak po porstu zastępuję stary obiekt, czyli usuwam stary i tworze nowy, 
    // dziął to inaczje niż tu jest pokazane
  }

  ngOnDestroy(): void {
    console.log('destroy');    
  }

  public infectHandler(id: number) {
    this.infects.next({color: this.boxStats.color, targetId: id, infectorId: this.boxStats.id});
  }

}
