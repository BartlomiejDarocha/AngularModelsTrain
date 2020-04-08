import { Component } from '@angular/core';
import { RouterModService } from './router-mod.service';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.less']
})
export class RoutingComponent {

  public onelvlRoutingData = [];
  public twolvlRoutingData = [];

  constructor(
    private routerModService: RouterModService,
    ) {
    this.onelvlRoutingData = this.routerModService.GetOnelvlRoutingData();
    this.twolvlRoutingData = this.routerModService.GetTwolvlRoutingData();
   }

}
