import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rot-train-main',
  templateUrl: './rot-train-main.component.html',
  styleUrls: ['./rot-train-main.component.less']
})
export class RotTrainMainComponent implements OnInit {

  public familyTable = [
    {
      name: 'Bartek',
      job: 'programista',
      color: 'red',
    },
    {
      name: 'Kajtek',
      job: 'lekarz',
      color: 'green',
    },
    {
      name: 'Wojtek',
      job: 'inż mechanik',
      color: 'silver',
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
