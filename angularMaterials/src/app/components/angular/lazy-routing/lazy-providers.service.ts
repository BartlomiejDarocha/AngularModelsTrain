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

// singleton

  private loadData(): Observable<any> {
    return this.service.newGet('https://the-one-api.dev/v2/book/5cf5805fb53e011a64671582');
    // return this.service.newGet('https://the-one-api.dev/movie');
    // return this.service.newGet('https://the-one-api.herokuapp.com/v1/book/5cf5805fb53e011a64671582');
    // return this.service.newGet('https://the-one-api.herokuapp.com/v1/movie');
  }

  private async loadDataOnPromiser(): Promise<any> {
    return await this.service.getOnPromise('https://the-one-api.dev/v2/book/5cf5805fb53e011a64671582');
  }

  public getData(): any {
    return this.data;
  }

  public fetchData(): Observable<any> {
    this.loadData().subscribe((data: any) => {
      this.data = data;
      console.log(data, 'data z serwera przypisuje i zwraca');
      console.log(0);
      this.trainData.next(data);
    });
    console.log(1);
    return this.trainData.asObservable();
  }

  public async fetchDataOnPromise(): Promise<any> {
    try {
      const dataPromise = await this.loadDataOnPromiser();
      console.log(dataPromise, 'dataPromise SERVICE');
      this.data = dataPromise;
      return this.data;
    } catch (err) {
      console.log(err);
    }
  }

  public combineTwoUpperMethod(): Observable<any> | any {
    if (this.data) {
      return this.data;
    } else {
      this.loadData().subscribe((data: any) => {
        this.data = data;
        this.trainData.next(data);
      });
      return this.trainData.asObservable();
    }
  }


}
