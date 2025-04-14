import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  storage = localStorage;
  key: string = 'token';

  status: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {
    this.status.next(this.isLoggedIn());
  }

  save(token: string): void {
    //localStorage.settItem('token', token)
    this.storage.setItem(this.key, token);
    this.status.next(true);
  }

  get(): string{
    // return localStorage.getItem('token') || '';
    return this.storage.getItem(this.key) || '';
  }

  delete(): void{
    this.storage.removeItem(this.key);
    this.status.next(false);
  }

  isLoggedIn(): boolean{
    return !!this.get();
  }
}
