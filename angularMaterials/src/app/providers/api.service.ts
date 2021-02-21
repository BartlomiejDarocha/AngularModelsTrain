import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // private headers = new HttpHeaders({
  //   // 'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
  //   // 'x-rapidapi-key': '473bd91c3fmsh3c098e68091a926p1d8c12jsnc4ee49567e71',
  //   // 'useQueryString': 'true'
  //   // 'content-type': 'application/x-www-form-urlencoded',
  //   'Authorization': 'Bearer HuNvf-JEWj4m52To0tTw',
  //   'content-type': 'application/json',
  // });

  // lotr api HuNvf-JEWj4m52To0tTw

  constructor(private http: HttpClient) { }

  public newGet(url: string): Observable<any> {
    return this.http.get(url);
    // return this.http.get(url, {headers: this.headers});
  }

  public get(url: string, param: any = null): Observable<any> {
    const paramTeset = {'people1': '1', 'people2': '3' };
    return this.http.get(url, {params: param});
  }
  public async getOnPromise(url: string, param: any = null): Promise<any> {
    return await this.http.get(url, {params: param}).toPromise();
    // toPromise i teraz jakos pormis i musi byc async i await
  }

  public async postOnPromise(url: string, body: any): Promise<any> {
    return await this.http.post(url, body).toPromise();
  }

  public async putOnPromise(url: string, body: any): Promise<any> {
    return await this.http.put(url, body).toPromise();
  }

  public async deleteOnPromise(url: string): Promise<any> {
    return await this.http.delete(url).toPromise();
  }
}
