import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

const AGEPATTERN = /^\d+$/;

@Component({
  selector: 'app-validation-form-group',
  templateUrl: './validation-form-group.component.html',
  styleUrls: ['./validation-form-group.component.less']
})
export class ValidationFormGroupComponent implements OnInit {
  public form1: FormGroup;
  private passwordValue = '';
  private confirmPasswrodValue = '';

  constructor() { }

  public ngOnInit(): void {
    this.form1 = new FormGroup({
      name: new FormControl('test', [Validators.required]),
      age: new FormControl('', [Validators.required, Validators.pattern(AGEPATTERN)]),
      nickName: new FormControl(''),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required, this.confirmPassHandler()])
    });
  }

  public passwordHandler($event: any): void {
    this.passwordValue = $event.target.value;
    this.form1.get('confirmPassword').setValue(this.form1.get('confirmPassword').value);
  }

  private confirmPassHandler(): ValidatorFn {
    return(currentControl: AbstractControl): { [key: string]: boolean } => {
      if (currentControl.value !== this.passwordValue) {
        return {missMatchPassword: true};
      }
    };
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

  // odrazu po SetValue odpala się sprawdzanie validacji
  public setValue(): void {
    this.form1.get('age').setValue('valid test');
    this.form1.get('age').markAsTouched();
  }

  public checkFormValue(): void {
    console.log(this.form1.value, 'form1 values');
  }

  public changeValidationControl(): void {
    this.form1.get('nickName').setValidators([Validators.required, Validators.pattern(AGEPATTERN)]);
  }



}
