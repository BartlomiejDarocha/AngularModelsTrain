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
  public getStarWars() {
    this.api.get('https://swapi.co/api/peopless').subscribe(data => {
      console.log(data, 'starwars Data');
    });
  }

}
