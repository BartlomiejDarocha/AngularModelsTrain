import { Component, OnInit } from '@angular/core';
import { RxjsService } from './service/rxjs.service';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.less']
})
export class RxjsComponent implements OnInit {

  constructor(
    private rxjsService: RxjsService
  ) { }

  ngOnInit() {
  }

}
