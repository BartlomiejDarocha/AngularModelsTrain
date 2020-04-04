import { Component, OnInit } from '@angular/core';
import { RouterModService } from './router-mod.service';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.less']
})
export class RoutingComponent implements OnInit {

  public onelvlRoutingData = [];

  constructor(private routerModService: RouterModService) {
    this.onelvlRoutingData = this.routerModService.GetOnelvlRoutingData();
    console.log(this.onelvlRoutingData , 'onelvlRoutingData');
   }

  ngOnInit() {
  }

}
