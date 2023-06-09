import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  uri="http://localhost:3000/login"

  constructor(private httpClient: HttpClient) { }

  login(user: User): Observable<any>{
    return this.httpClient.post(this.uri, JSON.stringify(user),{
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      observe: 'response'
    })
  }
}
