import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

const AGEPATTERN = /^\d+$/;

@Component({
  selector: 'app-validation-form-group',
  templateUrl: './validation-form-group.component.html',
  styleUrls: ['./validation-form-group.component.less']
})
export class ValidationFormGroupComponent implements OnInit {
  public form1: FormGroup;

  constructor() { }

  public ngOnInit(): void {
    this.form1 = new FormGroup({
      name: new FormControl('test', [Validators.required]),
      age: new FormControl('', [Validators.required, Validators.pattern(AGEPATTERN)]),
      nickName: new FormControl(''),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required])
    });
  }

  private confirmPassHandler(input: FormControl) {
    if (!input.root || !input.root.get('confirmPassword')) {
      return null;
    }
    const exactMatch = this.form1.get('password').value === input.value;
    console.log(exactMatch, 'exactMatch');
    return exactMatch ? null : {missMatchPassword: true};
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

  // funckaj do zaznaczna różnych błędów
  public markAsTouched(): void {
    // this.form1.markAsTouched();
    this.form1.get('name').markAsTouched();
    this.form1.get('age').markAsTouched();
    this.form1.get('password').markAsTouched();
  }


  // funckja do dodawanianowej wartosci oraz updateFormu
  public patchValue(): void {
    this.form1.patchValue({
      name: ''
    });
    this.form1.updateValueAndValidity();
  }


  public setValue(): void {
    this.form1.get('age').setValue('valid test');
    this.form1.get('age').markAsTouched();
  }

  public checkFormValue(): void {
    console.log(this.form1.value, 'form1 values');
  }



}
