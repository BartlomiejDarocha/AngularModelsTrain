import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slidemenu-content',
  templateUrl: './slidemenu-content.component.html',
  styleUrls: ['./slidemenu-content.component.less']
})
export class SlidemenuContentComponent implements OnInit {
  @Input() public menuList = [];
  constructor() { }

  ngOnInit() {
    // console.log(this.menuList,  'menuList');
  }

}
