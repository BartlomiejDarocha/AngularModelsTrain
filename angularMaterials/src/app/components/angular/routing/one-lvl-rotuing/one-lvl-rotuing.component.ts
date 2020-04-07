import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModService } from '../router-mod.service';

@Component({
  selector: 'app-one-lvl-rotuing',
  templateUrl: './one-lvl-rotuing.component.html',
  styleUrls: ['./one-lvl-rotuing.component.less']
})
export class OneLvlRotuingComponent implements OnInit {
  private onelvlRoutingData: Array<any>;
  private boxId: number;

  constructor(
    private route: ActivatedRoute,
    private routerModService: RouterModService
  ) {
    this.route.params.subscribe((data: any) => {
      console.log(data, 'data params');
    });
    this.onelvlRoutingData = this.routerModService.GetOnelvlRoutingData();
    console.log(this.onelvlRoutingData, 'onleLvlRoutingData component');
   }

  ngOnInit() {

  }

  private searchbox(boxId: number) {
    return this.onelvlRoutingData.find(box => box.id === boxId);
  }

}
