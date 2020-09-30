import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // potrzebne gdy jakiś moduł bedzie potrzebować cyklicznie pobierać usera z servera
  public user$ = new Subject<any>();
  // user
  public user = {
    number: null // to zastepuje id z powodu takiego api;
  };
  private intervalRuning = false;
  private token;
  private userInterval$: any;
  constructor(private apiService: ApiService) { }

  public async getUser(): Promise<any> {
    const token: string = localStorage.getItem('token');
    console.log(token, 'token GET user');
    if (this.user.number || token) {
      return this.user;
    }
    this.token = token;
    // tslint:disable-next-line: max-line-length
    const user = await this.apiService.get('https://api.spoonacular.com/recipes/complexSearch?query=pizza&apiKey=8682375027e9489ba9b324bf8efd84d0').toPromise();
    this.user = user;
    console.log(this.user, 'user GET user');
    this.refreshUser();
    this.intervalRuning = true;
    this.user$.next(user);
    return user;
  }

  private refreshUser(): void {
    if (!this.intervalRuning) {
      this.userInterval$ = setInterval(async() => {
        try {
          // tslint:disable-next-line:max-line-length
          const user = await this.apiService.get('https://api.spoonacular.com/recipes/complexSearch?query=pizza&apiKey=8682375027e9489ba9b324bf8efd84d0').toPromise();
          this.user = {...user, number: user};
          this.user$.next(user);
          console.log(user, 'user interval');
        } catch (err) {
          console.error(err);
        }
      }, 25000);
    }
  }

  public logout(): void {
    clearInterval(this.userInterval$);
    localStorage.removeItem('token');
    this.user = { number: null};
    this.intervalRuning = false;
    console.log('-------LOGOUT-------');
    console.log(localStorage.getItem('token'), 'Token');
    console.log(this.user, 'user');
    console.log(this.intervalRuning, 'intervalRunning');
    console.log('------------');
  }

  public async login(data: any): Promise<void> {
    // formularz wysyłki
    // jakis post ale do tego server potrzebny do zrobienia w node.
    // narazie dodwanie samego tokenu;
    console.log(data, 'data Logowania');

  }


}
