import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inout-put',
  templateUrl: './inout-put.component.html',
  styleUrls: ['./inout-put.component.less']
})
export class InoutPutComponent implements OnInit {
  public simpleBoxesTable = [
    {id: 0, color: 'gray'},
    {id: 1, color: 'silver'},
    {id: 2, color: 'green'},
    {id: 3, color: 'blue'},
  ];
  public infected: any;
  constructor() { }

  ngOnInit() {
  }
  public infectsHandler(infectBox: any): void  {
    this.infected =  infectBox;
  }
}
