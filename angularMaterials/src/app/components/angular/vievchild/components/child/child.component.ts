import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.less']
})
export class ChildComponent implements OnInit {
  @Input() public options: any = { id: 'test', name: 'test'};

  constructor() { }

  ngOnInit() {
  }

}
