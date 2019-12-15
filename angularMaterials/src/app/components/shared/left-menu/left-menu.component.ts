import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.less']
})
export class LeftMenuComponent implements OnInit {
  @Input() public subMenu = [];
  constructor() { }

  ngOnInit() {
  }

}
