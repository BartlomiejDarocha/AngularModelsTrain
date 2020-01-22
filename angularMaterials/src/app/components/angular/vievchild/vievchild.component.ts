import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-vievchild',
  templateUrl: './vievchild.component.html',
  styleUrls: ['./vievchild.component.less']
})
export class VievchildComponent implements OnInit, AfterViewInit {
  public buttonId = '';
  public boxesArray = [
    {id: 'box1', name: 'box1'},
    {id: 'box2', name: 'box2'},
    {id: 'box3', name: 'box3'}
  ];
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
  }
  public scrollByGetElement(boxID: string): void {
    if (boxID) {
      const lookingElement = document.getElementById(boxID);
      const position = lookingElement.offsetHeight + lookingElement.offsetTop;
      console.log(lookingElement);
      console.log(document.getElementById(boxID).offsetHeight);
      console.log(position, 'pozycja');
      lookingElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.log('nie wybrano boxa');
    }
  }

}
