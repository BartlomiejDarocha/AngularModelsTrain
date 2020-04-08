import { Component, OnInit } from '@angular/core';
import { RouterModService } from './router-mod.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.less']
})
export class RoutingComponent implements OnInit {

  private twolvlRoutingId: any;
  public onelvlRoutingData = [];
  public twolvlRoutingData = [];

  constructor(
    private routerModService: RouterModService,
    private route: ActivatedRoute
    ) {
    this.onelvlRoutingData = this.routerModService.GetOnelvlRoutingData();
    this.twolvlRoutingData = this.routerModService.GetTwolvlRoutingData();
    this.route.params.subscribe((data: any) => {
      console.log(data, 'data');
    });
   }

  ngOnInit() {
  }

  private twoLvlRutingChildFilterHandler(id: string) {
    return this.twolvlRoutingData.filter((el: any) => {
      // tslint:disable-next-line:radix
      return el.id === parseInt(id);
    });
  }

}
