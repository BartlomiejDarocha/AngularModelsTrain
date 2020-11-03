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
    { id: 1, name: 'Podstawowe', url: 'basic', active: true },
    { id: 2, name: 'Atrybuty', url: 'attributes', active: false },
    { id: 3, name: 'Klasa', url: 'class', active: false },
    { id: 4, name: 'Umiejętności', url: 'skills', active: false },
    { id: 5, name: 'Ekwipunek', url: 'equipments', active: false },
  ];

  constructor(private router: Router) { }

  ngOnInit() {
    let newlist = false;
    this.options.forEach((el: BarOptionsInterface, i: number) => {
      if (this.router.url.includes(el.url)) {
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
