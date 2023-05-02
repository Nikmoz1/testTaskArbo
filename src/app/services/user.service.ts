import { Injectable } from '@angular/core';
import { StoreService } from './store.service';
import { Router } from '@angular/router';

export interface User {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _storeService: StoreService, private _router: Router) {}

  users = [{ username: 'admin', password: 'admin' }, {}];

  getUser() {
    this._storeService.get('user', (user) => {
      return user;
    });
  }

  signIn(user: User) {
    if (this.check(user)) {
      this._storeService.set('user', user);
      this._router.navigate(['/profile']);
    } else {
      console.log('no login');
    }
  }

  check(user: User): boolean {
    const checkUser = this.users.find(
      (_user) =>
        user.username === _user.username && user.password === _user.password
    );
    if (checkUser) {
      return true;
    } else return false;
  }
}
