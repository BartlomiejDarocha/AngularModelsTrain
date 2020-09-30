import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // potrzebne gdy jakiś moduł bedzie potrzebować cyklicznie pobierać usera z servera
  public user$ = new Subject<any>();
  // user
  public user = {
    userId: null
  };
  private intervalRuning = false;
  private token;
  constructor(private apiService: ApiService) { }

  public async getUser(): Promise<any> {
    const token: string = localStorage.getItem('token');
    console.log(token);
    if (this.user.userId || token) {
      return this.user;
    }
    this.token = token;
    const user = await this.apiService.get('https://the-one-api.dev/v2/book/5cf5805fb53e011a64671582').toPromise();
    this.user = user;
    this.refreshUser();
    this.intervalRuning = true;
    this.user$.next(user);
    return user;
  }

  private refreshUser(): void {
    console.log('refresh user');
  }


}
