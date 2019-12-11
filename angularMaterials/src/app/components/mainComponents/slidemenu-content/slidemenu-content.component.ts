import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-slidemenu-content',
  templateUrl: './slidemenu-content.component.html',
  styleUrls: ['./slidemenu-content.component.less']
})
export class SlidemenuContentComponent implements OnInit {
  @Input() public menuList = [];
  @Output() public activeMenuOut = new EventEmitter();
  public activeMenu = 0;
  constructor() { }

  ngOnInit(): void {
  }
  public menuActiveHandler(index: number): void {
    this.activeMenu = index;
    this.activeMenuOut.emit(true);
  }


}
