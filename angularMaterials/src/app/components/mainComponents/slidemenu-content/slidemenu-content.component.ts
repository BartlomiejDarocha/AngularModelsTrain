import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-slidemenu-content',
  templateUrl: './slidemenu-content.component.html',
  styleUrls: ['./slidemenu-content.component.less']
})
export class SlidemenuContentComponent implements OnInit {
  @Input() public menuList = [];
  @Input() public activeMenu = 0;
  @Output() public activeMenuOut = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log(this.menuList,  'menuList');
  }
  public menuActiveHandler(index: number): void {
    this.activeMenu = index;
    this.activeMenuOut.emit(index);
  }


}
