import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation-ngmodel',
  templateUrl: './validation-ngmodel.component.html',
  styleUrls: ['./validation-ngmodel.component.less']
})
export class ValidationNgmodelComponent implements OnInit {

  newData = {
    name: '',
    age: '',
    password: '',
    confirmPasswod: ''
  };

  constructor() { }

  ngOnInit() {
  }

}
