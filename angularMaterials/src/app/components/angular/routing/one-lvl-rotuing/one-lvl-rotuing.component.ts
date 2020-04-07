import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModService } from '../router-mod.service';

@Component({
  selector: 'app-one-lvl-rotuing',
  templateUrl: './one-lvl-rotuing.component.html',
  styleUrls: ['./one-lvl-rotuing.component.less']
})
export class OneLvlRotuingComponent {
  private onelvlRoutingData: Array<any>;
  public routingBox: any;

  constructor(
    private route: ActivatedRoute,
    private routerModService: RouterModService
  ) {
    this.onelvlRoutingData = this.routerModService.GetOnelvlRoutingData();
    this.route.params.subscribe((data: any) => {
      if (this.onelvlRoutingData) {
        // tslint:disable-next-line:radix
        this.routingBox = this.searchbox(parseInt(data.id));
      }
    });
   }

  private searchbox(boxId: number) {
    return this.onelvlRoutingData.find(box => box.id === boxId);
  }

}
