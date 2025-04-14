import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { environment } from 'src/environments/environment';
import { SignupUser } from '../interfaces/signup-user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  url: string = environment.apiUrl + 'signup';

  constructor(private httpClient: HttpClient) { }

  signup(user: SignupUser): Observable<SignupUser>{
    return this.httpClient.post<SignupUser>(this.url, user);
  }
}
