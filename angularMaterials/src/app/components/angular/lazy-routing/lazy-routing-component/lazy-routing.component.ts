import { Component, OnInit, OnDestroy } from '@angular/core';
import { LazyProvidersService } from '../lazy-providers.service';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-lazy-routing',
  templateUrl: './lazy-routing.component.html',
  styleUrls: ['./lazy-routing.component.less']
})
export class LazyRoutingComponent implements OnInit, OnDestroy {

  private dataSubject$: Subscription;
  public dataFromService: any;

  constructor(
    private lazyProvidersService: LazyProvidersService
  ) { }

  ngOnInit() {}
  public getDataService(): void {
    if (this.lazyProvidersService.getData()) {
      this.dataFromService = this.lazyProvidersService.getData();
      console.log(this.dataFromService, 'pobiera istniejące dane');
    } else {
      this.lazyProvidersService.fetchData().subscribe((data: any) => {
        console.log(data, 'component fechuje dane');
      });
    }
  }
  ngOnDestroy(): void {
    // this.dataSubject$.unsubscribe();
  }

}
