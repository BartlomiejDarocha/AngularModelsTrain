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
  public dataFromServicePromis: any;
  public monsteryData: any;

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
        console.log(2);
        console.log(data, 'component fechuje dane');
      });
    }
  }

  public combinieDataService(): void {
    console.log(typeof this.lazyProvidersService.combineTwoUpperMethod(), 'TyPE OF');
    if (typeof this.lazyProvidersService.combineTwoUpperMethod() === 'object') {
      this.lazyProvidersService.combineTwoUpperMethod().subscribe((data: any) => {
        console.log(data, 'EUREKA TEN POTWÓR ŻYJE!!!');
      });
    } else {
      this.monsteryData = this.lazyProvidersService.combineTwoUpperMethod();
      console.log(this.monsteryData, 'EUREKA MOSNTERY DATA JEST I JEST TYPE OF ANY');
    }
    console.log('combinie func');
  }

  public getDataServicePromise(): void {
    if (this.lazyProvidersService.getData()) {
      this.dataFromServicePromis = this.lazyProvidersService.getData();
    } else {
      this.lazyProvidersService.fetchDataOnPromise().then((dataFormPromise: any) => {
        console.log(dataFormPromise, 'FETCH z Componnetu On promis');
      });
    }
  }
  ngOnDestroy(): void {
    // this.dataSubject$.unsubscribe();
  }

}
