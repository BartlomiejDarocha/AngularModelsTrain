import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.less']
})
export class PromiseComponent implements OnInit {
  public simplePromisResult = 'test';
  public simplePromose = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('succes Promise');
    }, 500);
  });
  constructor() { }

  public ngOnInit(): void {
  }
  public simplePromiseTest(value: boolean): void {
    if (value) {
      this.simplePromose.then((data) => {
        console.log(typeof data, data);
        this.simplePromisResult = `${data}`;
      });
    }
  }

}
