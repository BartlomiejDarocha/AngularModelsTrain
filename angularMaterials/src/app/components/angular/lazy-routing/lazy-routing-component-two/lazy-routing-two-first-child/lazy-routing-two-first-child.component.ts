import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/providers/api.service';

@Component({
  selector: 'app-lazy-routing-two-first-child',
  templateUrl: './lazy-routing-two-first-child.component.html',
  styleUrls: ['./lazy-routing-two-first-child.component.less']
})
export class LazyRoutingTwoFirstChildComponent implements OnInit {

  private dataService: any;
  constructor(private service: ApiService) { }

  ngOnInit() {
  }

  public getDataPromisType(): void {
    this.service.getOnPromise('https://the-one-api.dev/v2/book/5cf5805fb53e011a64671582').then((data: any) => {
      this.dataService = data;
    });
  }

}
