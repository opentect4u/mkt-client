import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PassvalueService {

  constructor() { }

  isLogin(){
    return !!localStorage.getItem('token');
  }
}
