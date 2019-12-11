import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  @Input() public menuList = [];
  @Output() public  mobileMenuExecuter = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log(this.menuList , 'header Component');
  }
}
