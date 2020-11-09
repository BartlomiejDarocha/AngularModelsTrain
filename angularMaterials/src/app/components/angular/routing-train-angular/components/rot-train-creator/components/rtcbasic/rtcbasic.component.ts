import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rtcbasic',
  templateUrl: './rtcbasic.component.html',
  styleUrls: ['./rtcbasic.component.less']
})
export class RTCBasicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public fileHandler(event): void {
    console.log(event, 'event');
  }

}
