import { Component} from '@angular/core';
import { Subject } from 'rxjs';

import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.less']
})
export class LoaderComponent {
  public color = 'primary';
  public mode = 'indeterminate';
  public value = 50;
  public isLoading: Subject<boolean> = this.loaderService.isLoading;

  constructor(
    public loaderService: LoaderService
  ) {
    this.loaderService.isLoading.subscribe(data => {
      console.log(data, 'loader Subject');
    });
   }
}
