import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

const AGEPATTERN = /^\d+$/;

@Component({
  selector: 'app-validation-form-group',
  templateUrl: './validation-form-group.component.html',
  styleUrls: ['./validation-form-group.component.less']
})
export class ValidationFormGroupComponent implements OnInit {
  public data = {
    name: '',
    age: '',
    password: '',
  };

  public form1: FormGroup;

  constructor() { }

  public ngOnInit(): void {
    this.form1 = new FormGroup({
      name: new FormControl(' ', [Validators.required]),
      age: new FormControl('', [Validators.required, Validators.pattern(AGEPATTERN)]),
      password: new FormControl('', [Validators.required])
    });
    this.checkValidation();
  }

  public resetForm(): void {
    this.form1.reset();
  }

  public submitTestForm(): void {
    console.log('submit testForm');
  }

  public checkValidation(): void {
    console.log(this.form1, '>>>form1');
  }

  public markAsTouched(): void {
    this.form1.markAsTouched();
    this.form1.get('name').markAsTouched();
    this.form1.get('age').markAsTouched();
    this.form1.get('password').markAsTouched();
  }

}
