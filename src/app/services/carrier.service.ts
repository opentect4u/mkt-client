import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class CarrierService {

  uri:string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  //All Request Handlar
  request(type: string,
          url: string | string[],
          data?: object,
          params?: number | number[] | string | string[]
  ): Observable<{}>{
    
    //Urls for directions
    let urlData = (typeof url === 'object')? url.join('/') : url;
    
    //Parameters can used for data retrive, update, delete
    var paramDatas;
    if(typeof params === 'object'){
    
      paramDatas = params.join('/');

    }
    else if(typeof params != 'undefined'){
      
      paramDatas = params;

    }

    if(type === 'get'){
      
      return this.http.get(`${this.uri}/${urlData}${(typeof paramDatas != 'undefined')? '/' + paramDatas : ''}`);

    }
    else if(type === 'post'){
      
      return this.http.post<any>(`${this.uri}/${urlData}`, data);

    }
    else if(type === 'put'){
      
      return this.http.put<any>(`${this.uri}/${urlData}${(typeof paramDatas != 'undefined')? '/' + paramDatas : ''}`, data);

    }
    else if(type === 'delete'){

      return this.http.delete(`${this.uri}/${urlData}${(typeof paramDatas != 'undefined')? '/' + paramDatas : ''}`);

    }
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
