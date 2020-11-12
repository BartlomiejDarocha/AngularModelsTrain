import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rtcbasic',
  templateUrl: './rtcbasic.component.html',
  styleUrls: ['./rtcbasic.component.less']
})
export class RTCBasicComponent implements OnInit {
  public photoURL: '';

  constructor() { }

  ngOnInit() {
  }

  public fileHandler(event): void {
    console.log(event, 'event');
    if (event.target.files[0] || event.target.files.length) {
      console.error('Możesz dodać plik');
      return;
    }
  }

}
