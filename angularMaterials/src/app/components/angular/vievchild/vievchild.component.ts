import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-vievchild',
  templateUrl: './vievchild.component.html',
  styleUrls: ['./vievchild.component.less']
})
export class VievchildComponent implements OnInit, AfterViewInit {

  public boxesArray = [
    {id: 'box1', name: 'box1'},
    {id: 'box2', name: 'box2'},
    {id: 'box3', name: 'box3'}
  ];
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    // this.scrollByGetElement();
  }
  public scrollByGetElement(): void {
    const lookingElement = document.getElementById('box1');
    console.log(lookingElement);
    console.log(document.getElementById('box1').offsetHeight);
    console.log(lookingElement.offsetHeight + lookingElement.offsetTop, 'pozycja');
    lookingElement.scrollIntoView();
  }

}
