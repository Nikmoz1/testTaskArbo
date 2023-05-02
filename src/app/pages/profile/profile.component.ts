import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoreService } from 'src/app/services/store.service';
import { User, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  form!: FormGroup;
  user!: any;
  constructor(private _storeService: StoreService, private _fb: FormBuilder, private _userService: UserService) {
      this.user = this._userService.getUser();

    if (this.user) {
      this.form = this._generateForm(this.user);
    }

  }

  private _generateForm(user: User): FormGroup {
    const form = this._fb.group({
      username: [user ? user.username : '', Validators.required],
      password: [user ? user.password : '', Validators.required],
    });
    return form;
  }
  logout() {

  }

  update() {}
}
