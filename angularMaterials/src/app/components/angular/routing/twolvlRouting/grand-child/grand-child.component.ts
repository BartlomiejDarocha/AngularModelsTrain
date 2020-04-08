import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModService } from '../../router-mod.service';

@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.less']
})
export class GrandChildComponent {
  private twoLvlGrandData: any;
  public routingBox;

  constructor(
    private route: ActivatedRoute,
    private routerModService: RouterModService
  ) {
    this.twoLvlGrandData = this.routerModService.getChildlvlTwo();
    this.route.params.subscribe((data: any) => {
      if (this.twoLvlGrandData) {
        // tslint:disable-next-line:radix
        this.routingBox = this.searchbox(parseInt(data.id));
      }
    });
   }

  private searchbox(boxId: number) {
    return this.twoLvlGrandData.list.find(box => box.id === boxId);
  }

}
