import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { ApiService } from 'src/app/providers/api.service';

@Injectable({
  providedIn: 'root'
})
export class LazyProvidersService {
  private trainData = new Subject<any>();
  private data: any;

  constructor(
    private service: ApiService
  ) { }

  private loadData(): Observable<any> {
    return this.service.newGet('https://the-one-api.dev/v2/book/5cf5805fb53e011a64671582');
    // return this.service.newGet('https://the-one-api.dev/movie');
    // return this.service.newGet('https://the-one-api.herokuapp.com/v1/book/5cf5805fb53e011a64671582');
    // return this.service.newGet('https://the-one-api.herokuapp.com/v1/movie');
  }

  public getData(): any {
    return this.data;
  }

  public fetchData(): Observable<any> {
    this.loadData().subscribe((data: any) => {
      this.data = data;
      console.log(data, 'data z serwera przypisuje i zwraca');
      this.trainData.next(data);
    });
    console.log(0);
    return this.trainData.asObservable();
  }

}
