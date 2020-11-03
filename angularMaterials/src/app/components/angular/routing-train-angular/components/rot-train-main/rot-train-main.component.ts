import { BarOptionsInterface } from './../action-bar/action-bar.component';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rot-train-main',
  templateUrl: './rot-train-main.component.html',
  styleUrls: ['./rot-train-main.component.less']
})
export class RotTrainMainComponent implements OnInit {
  public basicBarOptions: BarOptionsInterface[] = [
    { id: 1, name: 'Kreator', url: '/angular/routingTrainAngular/creator', active: false },
    { id: 2, name: 'Bohaterowie', url: '/angular/routingTrainAngular/summary', active: false },
  ];
  constructor(private router: Router, private route: ActivatedRoute) {

   }

  ngOnInit() {
  }

  public actionBarHandler(option: BarOptionsInterface ): void {
    console.log(option);
    // this.router.navigate([url]);
  }

}
