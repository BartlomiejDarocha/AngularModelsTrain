import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/providers/api.service';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.less']
})
export class PromiseComponent implements OnInit {
  ///// first Example
  public simplePromisResult = 'test';
  public testUrl = 'https://swapi.co/api/people';
  public simplePromose = new Promise((resolves, rejects) => {
    const mathTest = Math.floor(Math.random() * 8) + 2;
    setTimeout(() => {
      if (mathTest >= 5) {
        resolves(`Succes promise result is ${mathTest}`);
      } else {
        rejects(`fail promise result is ${mathTest}`);
      }
    }, 500);
  });
  //////
  ///// sec Example
  promiseCount = 0;
  constructor(
    private http: HttpClient,
    private api: ApiService
    ) { }

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
    const promise1 = new Promise((resolves, rejects) => {
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
  /// http example asynchonic on promise
  /// promise
  public async getStarWarsBypromiseSimple(url: string) {
    return await this.http.get(url).toPromise();
  }
  public async testGeOnTry() {
    let test: any;
    try {
      test = await this.getStarWarsBypromiseSimple(this.testUrl);
    } catch (error) {
      console.log(error, 'error Cath result');
    }
  }
  public async useApiServiceOnpromise() {
    try {
      const data = await this.api.getOnPromise(this.testUrl);
      console.log(data, 'data userApiServiceOn primiser');
    } catch (error) {
      console.log(error, 'catch error on prmiser');
    }
  }
}
