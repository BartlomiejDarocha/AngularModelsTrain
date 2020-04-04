import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouterModService {
  private onelvlRoutingData = [
    {id: 1, name: 'box1', color: 'red'},
    {id: 2, name: 'box2', color: 'orange'},
    {id: 3, name: 'box3', color: 'blue'},
    {id: 4, name: 'box4', color: 'gray'},
  ];

  constructor() { }

  public GetOnelvlRoutingData(): Array<any> {
    return this.onelvlRoutingData;
  }
}
