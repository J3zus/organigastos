import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Credentials } from '../interfaces/credentials';
import { Observable } from 'rxjs';
import { TokenResponse } from '../interfaces/token-response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url: string = environment.apiUrl + 'auth.json';

  constructor(private httpClient: HttpClient) { }

  login(credentials: Credentials): Observable<TokenResponse>{
    return this.httpClient.post<any>(this.url, credentials);
  }
}
