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
    // to jest nie dopracowane
    // this.dataSubject$ = this.lazyProvidersService.getDataAsObservable().subscribe((data: any) => {
    //   this.data = data;
    //   console.log(this.data, 'lazy Component GET DATA');
    // });

    // to tez   jest zle do poprawy
    this.data2 = this.lazyProvidersService.getData().subscribe(data => {
      console.log(data, 'data, getData()');
    });
  }

  ngOnDestroy(): void {
    this.dataSubject$.unsubscribe();
  }

}
