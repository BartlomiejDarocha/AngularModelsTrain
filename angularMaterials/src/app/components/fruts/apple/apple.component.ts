import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.less']
})
export class AppleComponent implements OnInit {
  public appleId: any;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this.route, 'route');
    this.appleId = this.route.snapshot.paramMap.get('id');
    console.log(this.appleId, 'appelId');
  }

}
