import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

const AGEPATTERN = 

@Component({
  selector: 'app-validation-form-group',
  templateUrl: './validation-form-group.component.html',
  styleUrls: ['./validation-form-group.component.less']
})
export class ValidationFormGroupComponent implements OnInit {
  public data = {
    name: '',
    age: '',
    emial: '',
    password: '',
  };

  public form1: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form1 = new FormGroup({
      name: new FormControl(' ', [Validators.required]),
      age: new FormControl(' ', [Validators.required, Validators.pattern()]),
    });
  }

}
