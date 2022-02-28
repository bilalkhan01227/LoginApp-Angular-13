import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Observable } from 'rxjs';
// import { Response } from "@angular/http";
// import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly rootUrl = 'https://localhost:44316/api/authentication/login';


  constructor(private http: HttpClient) { }

  userAuthentication(Username: string, Password: string) {
    // var data = "username=" + userName + "&password=" + password;
    var jsonVariable = { "username" : Username , "password" : Password }
    let json = JSON.stringify(jsonVariable)
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json','No-Auth':'True' });
    return this.http.post(this.rootUrl,json, { headers: reqHeader });
  }

}
