import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoreService } from 'src/app/services/store.service';
import { MutateUser, User, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  form!: FormGroup;
  user!: User;
  existUsers = false
  constructor(private _fb: FormBuilder, private _userService: UserService) {
    this.user = this._userService.getUser();

    if (this.user) {
      this.form = this._generateForm(this.user);
    }
  }

  private _generateForm(user: MutateUser): FormGroup {
    const form = this._fb.group({
      name: [user ? user.name : '', Validators.required],
      password: [user ? user.password : '', Validators.required],
    });
    return form;
  }
  logout() {
    this._userService.logout();
  }

  update() {
    const formData: MutateUser = {
      name: this.form.value.name,
      password: this.form.value.password,
      username: this.user.username
    };
    this._userService.updateProfile(formData);
  }
}
