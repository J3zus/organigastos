import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  protected endpoint: string = '';
  private url: string = '';

  constructor(private httpClient: HttpClient, private authService: AuthService) {}

  geItems(): Observable<any>{
    const url: string = environment.apiUrl + this.endpoint;

    const headers: HttpHeaders = new HttpHeaders({
      authorization: this.authService.get()
    });

    return this.httpClient.get(url,{
      headers
    });
  }

  create(data: any): Observable<any>{
    const url: string = environment.apiUrl + this.endpoint;

    const headers: HttpHeaders = new HttpHeaders({
      authorization: this.authService.get()
    });

    return this.httpClient.post(url, data, {
      headers
    });
  }

  get(id: string): Observable<any>{
    const url = `${environment.apiUrl}${this.endpoint}/${id}`;

    const headers: HttpHeaders = new HttpHeaders({
      authorization: this.authService.get()
    });

    return this.httpClient.get(url,{
      headers
    });
  }
}
