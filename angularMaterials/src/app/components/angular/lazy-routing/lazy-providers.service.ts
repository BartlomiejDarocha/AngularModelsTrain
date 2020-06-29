import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { ApiService } from 'src/app/providers/api.service';

@Injectable({
  providedIn: 'root'
})
export class LazyProvidersService {
  private trainData = new Subject<any>();

  constructor(
    private service: ApiService
  ) { }

  private loadData(): Observable<any> {
    return this.service.get('https://swapi.co/api/people');
  }


  private setData(data: any): void {
    this.trainData.next(data);
  }

  public getData(): Observable<any> {
    if(this.trainData) {
      return this.trainData.asObservable();
    } else {
      this.loadData().subscribe((data: any) => {
        this.setData(data);
        return this.trainData.asObservable();
      });
    }
  }
}
