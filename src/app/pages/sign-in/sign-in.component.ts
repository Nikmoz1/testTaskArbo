import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  form!: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.form = this._generateForm();
  }
  private _generateForm(): FormGroup {
    const form = this._fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    });
    return form
  }
  signIn() {
    
  }
}
