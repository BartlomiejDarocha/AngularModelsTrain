import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModService } from '../../router-mod.service';


@Component({
  selector: 'app-twolvl-routing',
  templateUrl: './twolvl-routing.component.html',
  styleUrls: ['./twolvl-routing.component.less']
})
export class TwolvlRoutingComponent {
  private twolvlRoutingData = [];
  public dataElement: any;
  constructor(
    private route: ActivatedRoute,
    private routerModService: RouterModService
  ) {
    this.twolvlRoutingData = this.routerModService.GetTwolvlRoutingData();
    this.route.params.subscribe((data: any) => {
      // można subskrybować params żeby w celu posiadania na bierząco wartosci z params
      this.dataElement = this.twoLvlRutingChildFilterHandler(data.id);
      this.routerModService.setChildlvlTwo(this.dataElement);
    });
   }

  private twoLvlRutingChildFilterHandler(id: string) {
    return this.twolvlRoutingData.find((el: any) => {
      // tslint:disable-next-line:radix
      return el.id === parseInt(id);
    });
  }
}
