import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boxcolor',
  templateUrl: './boxcolor.component.html',
  styleUrls: ['./boxcolor.component.less']
})
export class BoxcolorComponent implements OnInit {
  @Input() public orginColor: string;
  @Input() public id: number;
  @Input() public otherBoxes: Array<any>;
  @Output() public infects = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

}
