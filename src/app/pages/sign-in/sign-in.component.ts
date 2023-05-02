import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  form!: FormGroup;

  constructor(private _fb: FormBuilder, private _userService: UserService) {
    this.form = this._generateForm();
  }
  private _generateForm(): FormGroup {
    const form = this._fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    return form;
  }
  signIn() {    
    const formData: User = {
      username: this.form.value.username,
      password: this.form.value.password,
    };
    this._userService.signIn(formData)
  }
}
