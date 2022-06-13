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
  public infectsHandler(infectBox: any): void  {
    console.log(infectBox, 'infectBox');
    let targetIndex: number;
    let newBox: any;
    this.simpleBoxesTable.forEach((box, index) => {
      if (infectBox.targetId === box.id) {
        targetIndex = index;
        box.infectedby = infectBox.infectorId;
        box.infectedColor = infectBox.color;
        // newBox = box;
        newBox = { ...box}; // { ...box }budujne (spread podobne zastosowanie w tablicach)
        // nowy obiekt a nie zmienia refenrecje juz isnteiajcego
        // jest to kolejny spoosb na gleboko kopie obiektu ale to do sprawdznia;
        console.log(newBox, 'newBox');
      }
    });
    this.simpleBoxesTable[targetIndex] = newBox;
    // przypisanie do nowego obiketu do tablicy spowoduje wywloanie metody w Input onChange
    // ponieważ zosały przypisane nowy obiekt a nie zmienione jego referencje.
  }
}
