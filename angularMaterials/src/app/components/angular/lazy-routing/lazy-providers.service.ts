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

  public loadData(): Observable<any> {
    // return this.service.newGet('https://the-one-api.dev/v2/book/5cf5805fb53e011a64671582');
    return this.service.newGet('https://the-one-api.dev/movie');
    // return this.service.newGet('https://the-one-api.herokuapp.com/v1/book/5cf5805fb53e011a64671582');
    // return this.service.newGet('https://the-one-api.herokuapp.com/v1/movie');
  }

  private setData(data: any): void {
    this.trainData.next(data);
  }

  // public getDataAsObservable(): Observable<any> {
  //   if (this.data) {
  //     console.log('zwraca istniejącą data');
  //     return this.trainData.asObservable();
  //   } else {
  //     this.loadData().subscribe((data: any) => {
  //       this.setData(data);
  //       this.data = data;
  //       console.log('Pobiera data z serwera przypisuje i zwraca');
  //       return this.trainData.asObservable();
  //     });
  //   }
  // }
  public getData(): Observable<any> {
    if (this.data) {
      console.log('zwraca istniejącą data');
      return this.trainData.asObservable();
    } else {
      this.loadData().subscribe((data: any) => {
        this.data = data;
        this.setData(data);
        console.log(data, 'data z serwera przypisuje i zwraca')
        return this.trainData.asObservable();
      });
    }
  }

  // public getData(): Observable<any> | any {
  //   if(this.data) {
  //     console.log('jest data zwraca z service');
  //     return this.data;
  //   } else {
  //     console.log('nie ma data pobiera z servera');
  //     this.loadData().subscribe((data: any) => {
  //       this.data = data;
  //       return this.data.asObservable();
  //     });
  //   }
  // }
}
