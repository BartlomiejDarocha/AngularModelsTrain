import { Component, OnInit } from '@angular/core';
import { LazyProvidersService } from '../lazy-providers.service';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-lazy-routing',
  templateUrl: './lazy-routing.component.html',
  styleUrls: ['./lazy-routing.component.less']
})
export class LazyRoutingComponent implements OnInit {

  private dataSubject$: Subscription;
  public data: any; // to jest nie dopracowane
  public data2: any;

  constructor(
    private lazyProvidersService: LazyProvidersService
  ) { }

  ngOnInit() {
    this.lazyProvidersService.loadData().subscribe(data => {
      console.log(data, 'data w komponencie lazy');
    });
  }

  ngOnDestroy(): void {
    // this.dataSubject$.unsubscribe();
  }

}
