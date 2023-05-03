import { Injectable } from '@angular/core';
import { StoreService } from './store.service';
import { Router } from '@angular/router';

export interface User {
  username: string;
  password: string;
}
export interface MutateUser extends User {
  name?: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user!: User;
  users: User[] = [{ username: 'admin', password: 'admin' }];

  constructor(private _storeService: StoreService, private _router: Router) {
    _storeService.get('users', (userExist) => {
      if (!userExist) {
        this.users = userExist as User[];
        _storeService.set('users', this.users);
      }
    });
  }

  getUser(): User {
    this._storeService.get('user', (user) => {
      this.user = user as User;
      console.log(user);
    });

    return this.user;
  }

  signIn(user: User) {
    const existUser = this.check(user);
    if (existUser) {
      this.user = existUser as User;
      this._storeService.set('user', existUser);
      this._router.navigate(['/profile']);
    } else {
      console.log('no login');
    }
  }

  check(user: User): User | boolean {
    const checkUser = this.users.find(
      (_user) =>
        user.username === _user.username && user.password === _user.password
    );
    if (checkUser) {
      console.log(checkUser);

      return checkUser;
    } else return false;
  }

  updateProfile(user: User) {
    // this._storeService.get('users', (_users) => {
    //   users = _users as User[];
    // });

    const userIndex = this.users.findIndex(
      (_user) => user.username === _user.username
    );
    if (userIndex !== -1) {
      this.users.splice(userIndex, 1);
      this.users.push(user);
      this._storeService.set('users', this.users);
    }

    // let oldUser = users.find((_user) => (user.username = _user.username));
    this._storeService.set('user', user);
    this.user = user;
  }

  logout(): void {
    this._storeService.remove('user');
    this._router.navigate(['/sign']);
  }
}
