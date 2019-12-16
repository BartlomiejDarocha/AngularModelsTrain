import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.less']
})
export class PromiseComponent implements OnInit {
  ///// first Example
  public simplePromisResult = 'test';
  public simplePromose = new Promise((resolves, rejects) => {
    const mathTest = Math.floor(Math.random() * 8) + 2 ;
    setTimeout(() => {
      if (mathTest >= 5) {
        resolves(`Succes promise result is ${mathTest}`);
      } else {
        rejects( `fail promise result is ${mathTest}`);
      }
    }, 500);
  });
  //////
  ///// sec Example
  promiseCount = 0;
  constructor() { }

  public ngOnInit(): void {
  }
  /// first example
  public simplePromiseTest(value: boolean): void {
    if (value) {
      this.simplePromose.then((data) => {
        console.log(typeof data, data);
        this.simplePromisResult = `${data}`;
      }).catch((datafail) => {
          console.log(typeof datafail, datafail);
          this.simplePromisResult = `${datafail}`;
      });
    }
  }
/// sec example
  public secExample(): void {
    const newPromiseCounter = ++this.promiseCount;
    const promise1 =  new Promise((resolves, rejects) => {
      setTimeout(() => {
        if (newPromiseCounter !== 10) {
          resolves(newPromiseCounter);
        } else {
          rejects(newPromiseCounter);
        }
      }, 1000); // Math.random() * 1000 + 2000
    });
    promise1.then((thenVal) => {
      console.log(thenVal, 'thenVal');
    }).catch((cathVal) => {
      console.log(cathVal, 'cathVal');
    });
    console.log(newPromiseCounter, 'newPromiseCounter last');
  }

}
