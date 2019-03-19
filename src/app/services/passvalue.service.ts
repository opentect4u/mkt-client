import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PassvalueService {

  uri:string = environment.apiUrl;
  heraders   =  new HttpHeaders().set('content-type', 'application/json');

  constructor(private http: HttpClient) { }

  //All Request Handlar
  request(type: string,
          data?: object,
          params?: object
  ){

    console.log(type, data, params);

  }

  //User credentials
  loginUser(userDetails: object){

    return this.http.post<any>(`${this.uri}/login`, userDetails);

  }

  //Logged In or Not
  isLogin(){
    return !!localStorage.getItem('token');
  }
}
