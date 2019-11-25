import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-advance-one',
  templateUrl: './advance-one.component.html',
  styleUrls: ['./advance-one.component.less']
})
export class AdvanceOneComponent implements OnInit {
  private paramsRoute: any;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(param => {
      console.log(param, 'params');
    });
  }

}
