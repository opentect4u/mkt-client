import { Component, OnInit } from '@angular/core';
import { PassvalueService } from '../services/passvalue.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  userId: string;
  password: string;
  status: boolean = false;

  constructor(
    private loginService: PassvalueService,
    private router: Router
  ){}

  ngOnInit(){
    if(this.loginService.isLogin()){
      this.router.navigate(['/dashboard'])
    }
  }
  
  loginUser(){

    var userDetails = {
      "user_id": this.userId,
      "password": this.password
    };
    
    this.loginService.loginUser(userDetails).subscribe(data => {

      if(data.token != 'No Data Found'){

        localStorage.setItem('token', data.token);
        this.router.navigate(['/dashboard']);

      }
      else{

        this.status = true;

      }
      
    });

  }
  
 }
