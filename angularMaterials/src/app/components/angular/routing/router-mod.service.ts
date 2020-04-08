import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouterModService {
  private onelvlRoutingData = [
    { id: 1, name: 'box1', color: 'red' },
    { id: 2, name: 'box2', color: 'orange' },
    { id: 3, name: 'box3', color: 'blue' },
    { id: 4, name: 'box4', color: 'gray' },
  ];
  private twolvlRoutingData = [
    {
      id: 1,
      name: 'name1',
      list: [
        { id: 1, name: 'box1name1', color: 'red' },
        { id: 2, name: 'box2name1', color: 'orange' },
        { id: 3, name: 'box3name1', color: 'blue' },
        { id: 4, name: 'box4name1', color: 'gray' },
      ]
    },
    {
      id: 2,
      name: 'name2',
      list: [
        { id: 1, name: 'box1name2', color: 'red' },
        { id: 2, name: 'box2name2', color: 'orange' },
        { id: 3, name: 'box3name2', color: 'blue' },
        { id: 4, name: 'box4name2', color: 'gray' },
      ]
    }
  ];

  private childLvlTwo: any;

  constructor() { }

  public GetOnelvlRoutingData(): Array<any> {
    return this.onelvlRoutingData;
  }

  public GetTwolvlRoutingData(): Array<any> {
    return this.twolvlRoutingData;
  }

  public setChildlvlTwo(child: any): void {
    this.childLvlTwo = child;
  }

  public getChildlvlTwo(): any {
    return this.childLvlTwo;
  }

}
