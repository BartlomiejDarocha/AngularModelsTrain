import { UserService } from './../../../../../providers/users/user.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/providers/api.service';

@Component({
  selector: 'app-lazy-routing-two-first-child',
  templateUrl: './lazy-routing-two-first-child.component.html',
  styleUrls: ['./lazy-routing-two-first-child.component.less']
})
export class LazyRoutingTwoFirstChildComponent implements OnInit {

  private dataService: any;
  public user: any;
  constructor(
    private service: ApiService,
    private userService: UserService
    ) { }

  ngOnInit() {
  }

  public getDataPromisType(): void {
    this.service.getOnPromise('https://the-one-api.dev/v2/book/5cf5805fb53e011a64671582').then((data: any) => {
      this.dataService = data;
      console.log(this.dataService, 'dataService');
    });
  }

  public async getDataPromisTypeTry(): Promise<void> {
    try {
      this.dataService = await this.service.getOnPromise('https://the-one-api.dev/v2/book/5cf5805fb53e011a64671582');
    } catch (error) {
      console.error(error, 'error');
    }
  }
  public async getuserTest(): Promise<void> {
    try {
      this.user = await this.userService.getUser();
      console.log(this.user, 'user z componentu');
    } catch (err) {
      console.error(err);
    }
  }
  public logout(): void {
    this.userService.logout();
  }

}
