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
  public data: any;

  constructor(
    private lazyProvidersService: LazyProvidersService
  ) { }

  ngOnInit() {
    this.data
    console.log(this.data, 'lazy Component GET DATA');
  }

  ngOnDestroy(): void {
    this.dataSubject$.unsubscribe();
  }

}
