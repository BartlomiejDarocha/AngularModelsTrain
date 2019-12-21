import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inout-put',
  templateUrl: './inout-put.component.html',
  styleUrls: ['./inout-put.component.less']
})
export class InoutPutComponent implements OnInit {
  public simpleBoxesTable = [
    {id: 0, color: 'gray', infectedby: null },
    {id: 1, color: 'silver', infectedby: null},
    {id: 2, color: 'green', infectedby: null},
    {id: 3, color: 'blue', infectedby: null},
  ];
  constructor() { }

  ngOnInit() {
  }
  public infectsHandler(infectBox: any): void  {
    console.log(infectBox, 'infectBOx');
  }
}
