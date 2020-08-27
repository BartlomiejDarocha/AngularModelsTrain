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
  public getData(): void {
    this.lazyProvidersService.getData().subscribe((data: any) => {
      this.dataFromService = data;
      console.log(this.dataFromService, 'dataFromService');
    });
  }

  ngOnDestroy(): void {
    // this.dataSubject$.unsubscribe();
  }

}
