import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inout-put',
  templateUrl: './inout-put.component.html',
  styleUrls: ['./inout-put.component.less']
})
export class InoutPutComponent implements OnInit {
  public simpleBoxesTable = [
    {id: 0, color: 'gray', infectedby: -1, infectedColor: null},
    {id: 1, color: 'silver', infectedby: -1, infectedColor: null},
    {id: 2, color: 'green', infectedby: -1, infectedColor: null},
    {id: 3, color: 'blue', infectedby: -1, infectedColor: null},
  ];
  constructor() { }

  ngOnInit() {
  }
  // public infectsHandler(infectBox: any): void  {
  //   const tempNewObj = {
  //     id: 0,
  //     color: '',
  //     infectedby: -1,
  //     infectedColor: null
  //   };
  //   let lokingindex: number;
  //   this.simpleBoxesTable.forEach((box, index) => {
  //     if (infectBox.targetId === box.id) {
  //       lokingindex = index;
  //       tempNewObj['id'] = box.id;
  //       tempNewObj['color'] = box.color;
  //       tempNewObj['infectedby'] = infectBox.infectorId;
  //       tempNewObj['infectedColor'] = infectBox.color;
  //     }
  //   });
  //   this.simpleBoxesTable[lokingindex] = tempNewObj;
  // }
  public infectsHandler(infectBox: any): void  {
    const tempNewObj = {
      id: 0,
      color: '',
      infectedby: -1,
      infectedColor: null
    };
    let lokingindex: number;
    this.simpleBoxesTable.forEach((box, index) => {
      if (infectBox.targetId === box.id) {
        lokingindex = index;
        tempNewObj['id'] = box.id;
        tempNewObj['color'] = box.color;
        tempNewObj['infectedby'] = infectBox.infectorId;
        tempNewObj['infectedColor'] = infectBox.color;
      }
    });
    this.simpleBoxesTable[lokingindex] = tempNewObj;
  }
}
