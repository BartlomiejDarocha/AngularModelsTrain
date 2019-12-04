import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/providers/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(
    private api: ApiService
    ) { }

  ngOnInit() {
  }
  public getStarWarsParam() {
    this.api.get('https://swapi.co/api/peoplessss', {'people1': '1', 'people2': '3' }).subscribe(data => {
      console.log(data, 'starwars Data');
    });
  }
  public getStarWars() {
    this.api.get('https://swapi.co/api/people').subscribe(data => {
      console.log(data, 'starwars Data');
    });
  }
  public getStarWarsOnPromise() {
    this.api.getOnPromise('https://swapi.co/api/people').then(data => {
      console.log(data, 'promise');
    }).catch(error => {
      console.log(error, 'error on promise');
    });
  }
  public getStarWarsOnPromiseParams() {
    this.api.getOnPromise('https://swapi.co/api/people', {'eye_color': 'blue'}).then(data => {
      console.log(data, 'promise');
    });
  }

}
