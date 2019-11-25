import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-advance-one',
  templateUrl: './advance-one.component.html',
  styleUrls: ['./advance-one.component.less']
})
export class AdvanceOneComponent implements OnInit, OnDestroy {
  private sub: any;
  private pageParams: any;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(param => {
      console.log(param, 'params');
    });
    // dodanie zmiennej sub po to by po zniszczeniu componnetu przestać subscrybować
    this.sub = this.route.queryParams.subscribe(params => {
       this.pageParams = params;
       console.log(this.pageParams, 'pageParmas');
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
