import { BarOptionsInterface } from './../action-bar/action-bar.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rot-train-main',
  templateUrl: './rot-train-main.component.html',
  styleUrls: ['./rot-train-main.component.less']
})
export class RotTrainMainComponent implements OnInit {
  public basicBarOptions: BarOptionsInterface[] = [
    { id: 1, name: 'Kreator', url: '/angular/routingTrainAngular/creator/basic', active: false },
    { id: 2, name: 'Bohaterowie', url: '/angular/routingTrainAngular/summary', active: false },
  ];
  constructor(private router: Router) {}

  ngOnInit() {
    let newlist = false;
    this.basicBarOptions.forEach((el: BarOptionsInterface, i: number) => {
      if (this.router.url.includes(el.url)) {
        this.basicBarOptions[i].active = true;
        newlist = true;
      }
    });
    if (newlist) {
      this.basicBarOptions = [...this.basicBarOptions];
    }
  }

  public actionBarHandler(option: BarOptionsInterface ): void {
    const lookingIndex = this.basicBarOptions.findIndex((el: BarOptionsInterface) => el.id === +option.id);
    this.basicBarOptions = this.basicBarOptions.map((el: BarOptionsInterface) => el = {...el, active: false});
    this.basicBarOptions[lookingIndex].active = true;
    this.basicBarOptions = [...this.basicBarOptions];
    this.router.navigate([option.url]);
  }

}
