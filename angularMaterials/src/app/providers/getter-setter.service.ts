import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetterSetterService {
  private starWarsPeople: any;

  constructor(private apiService: ApiService) { }

  public loadData(): Observable <any> {
    return this.apiService.get('https://swapi.co/api/people');
  }

  public setStarWarsPeople(data: any): void {
    this.setStarWarsPeople = data;
    console.log(this.setStarWarsPeople, 'this.setStarWarsPeople');
  }

  public getStarWarsPeople(): any {
    return this.setStarWarsPeople;
  }


}
