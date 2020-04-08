import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModService } from '../../router-mod.service';

@Component({
  selector: 'app-twolvl-routing',
  templateUrl: './twolvl-routing.component.html',
  styleUrls: ['./twolvl-routing.component.less']
})
export class TwolvlRoutingComponent implements OnInit {
  private twolvlRoutingData = [];
  public listName: any;
  constructor(
    private route: ActivatedRoute,
    private routerModService: RouterModService
  ) {
    this.twolvlRoutingData = this.routerModService.GetTwolvlRoutingData();
    this.route.params.subscribe((data: any) => {
      this.listName = this.twoLvlRutingChildFilterHandler(data.id);
      console.log(this.listName, 'listName');
    });
   }

  ngOnInit() {
  }

  private twoLvlRutingChildFilterHandler(id: string) {
    return this.twolvlRoutingData.find((el: any) => {
      // tslint:disable-next-line:radix
      return el.id === parseInt(id);
    });
  }

}
