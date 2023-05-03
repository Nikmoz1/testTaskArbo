import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private _router: Router) {}

  set(
    key: string,
    value: unknown,
    cb = (): void => undefined,
    errcb = (): void => undefined
  ): void {
    if (!value) return;
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error('Store error:', err, key);
      errcb();
    }
    cb();
  }

  get(
    key: string,
    cb = (data: unknown): void => undefined,
    errcb = (): void => undefined
  ): void {
    let data = localStorage.getItem(key) || null;
    if (data) {
      try {
        data = JSON.parse(data);
      } catch (e) {
        errcb();
      }
      cb(data);
    }
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }
  clear(): void {
    localStorage.clear();
    this._router.navigate(['/sign']);
  }
}
