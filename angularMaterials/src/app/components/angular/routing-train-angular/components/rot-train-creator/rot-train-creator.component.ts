import { BarOptionsInterface } from './../action-bar/action-bar.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rot-train-creator',
  templateUrl: './rot-train-creator.component.html',
  styleUrls: ['./rot-train-creator.component.less']
})
export class RotTrainCreatorComponent implements OnInit {
  public options: BarOptionsInterface[] = [
    { id: 1, name: 'Podstawowe', url: 'angular/routingTrainAngular/creator/basic', active: true },
    { id: 2, name: 'Atrybuty', url: 'angular/routingTrainAngular/creator/attributes', active: false },
    { id: 3, name: 'Klasa', url: 'angular/routingTrainAngular/creator/class', active: false },
    { id: 4, name: 'Umiejętności', url: 'angular/routingTrainAngular/creator/skills', active: false },
    { id: 5, name: 'Ekwipunek', url: 'angular/routingTrainAngular/creator/equipments', active: false },
  ];

  constructor(private router: Router) { }

  ngOnInit() {
    let newlist = false;
    this.options.forEach((el: BarOptionsInterface, i: number) => {
      if (this.router.url.includes(el.url)) {
        console.log('???');
        this.options[i].active = true;
        newlist = true;
      }
    });
    if (newlist) {
      this.options = [...this.options];
    }
  }

  public actionBarHandler(option: BarOptionsInterface ): void {
    const lookingIndex = this.options.findIndex((el: BarOptionsInterface) => el.id === +option.id);
    this.options = this.options.map((el: BarOptionsInterface) => el = {...el, active: false});
    this.options[lookingIndex].active = true;
    this.options = [...this.options];
    this.router.navigate([option.url]);
  }

}
