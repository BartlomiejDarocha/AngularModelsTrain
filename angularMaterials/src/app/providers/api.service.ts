import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public get(url: string, param: any = null): Observable<any> {
    const paramTeset = {'people1': '1', 'people2': '3' };
    return this.http.get(url, {params: param});
  }
  public async getOnPromise(url: string, param: any = null) {
    return await this.http.get(url, {params: param}).toPromise();
  }
}
