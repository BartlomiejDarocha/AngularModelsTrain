import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { ApiService } from 'src/app/providers/api.service';

@Injectable({
  providedIn: 'root'
})
export class LazyProvidersService {
  private trainData = new Subject<any>();

  constructor(
    private service: ApiService;
  ) { }

  public getData(): Observable<any> {
    return this.trainData.asObservable();
  }
}
