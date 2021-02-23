import { BarOptionsInterface } from './../action-bar/action-bar.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/providers/api.service';

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

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
    // sparwdza na podstawie routingu jaki element menu jest aktywny
    this.options = this.options.map((el: BarOptionsInterface) => ({...el, active: this.router.url.includes(el.url) ? true : false }));
  }

  public actionBarHandler(option: BarOptionsInterface ): void {
    const lookingIndex = this.options.findIndex((el: BarOptionsInterface) => el.id === +option.id);
    this.options = this.options.map((el: BarOptionsInterface) => el = {...el, active: false});
    this.options[lookingIndex].active = true;
    this.options = [...this.options];
    this.router.navigate([option.url]);
  }

  public async testJsonServer(): Promise<void> {
    try {
      const jsonServerData = await this.api.getOnPromise('http://localhost:3000/api/posts');
      console.log(jsonServerData, 'JSonServerDataa');

    } catch(err) {
      console.error('test Json Server ', err)
    }
  }

  public async testJsonServerId(): Promise<void> {
    try {
      const jsonGetById = await this.api.getOnPromise('http://localhost:3000/api/posts/1');
      console.log(jsonGetById, 'jsonGetByID');
    } catch(err) {
      console.error('test Json ServerID', err);
    }
  }

  public async jsonServerPost(): Promise<void> {
    const testBody = {
      title: 'Test2',
      author: 'Bartek'
    }
    try {
      const postJson = await this.api.postOnPromise('http://localhost:3000/api/posts', testBody);
      console.log(postJson, 'Post Json Data');

    } catch(err) {
      console.error('Json post err', err);
    }
  }

  public async jsonServerPut(): Promise<void> {
    const testBody = {
      id: 7,
      title: 'Test2',
      author: 'Bartekkkkkk'
    }
    try {
      const putJson = await this.api.putOnPromise('http://localhost:3000/posts/7', testBody);
      console.log(putJson, 'Put Json Data');

    } catch(err) {
      console.error('Json put err', err);
    }
  }

  public async jsonServerDelete(): Promise<void> {
    try {
      const deleteJson = await this.api.deleteOnPromise('http://localhost:3000/posts/7');
      console.log(deleteJson, 'delete Json Data');

    } catch(err) {
      console.error('Json delete err', err);
    }
  }

}
