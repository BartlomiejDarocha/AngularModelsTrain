import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-vievchild',
  templateUrl: './vievchild.component.html',
  styleUrls: ['./vievchild.component.less']
})
export class VievchildComponent implements OnInit, AfterViewInit {
  public buttonId = '';
  public scollHeight = '';
  @ViewChild('container') public container: ElementRef;
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
  public scrollToHeight(): void {
  }
  public scrollByGetElement(boxID: string): void {
    if (boxID) {
      const lookingElement = document.getElementById(boxID);
      const position = lookingElement.offsetHeight + lookingElement.offsetTop;
      console.log(lookingElement);
      console.log(position, 'pozycja');
      lookingElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // lookingElement.scrollTo(0, 500);
    } else {
      console.log('nie wybrano boxa');
    }
  }

}
