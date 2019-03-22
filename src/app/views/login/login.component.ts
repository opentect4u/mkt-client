import { Component, OnInit } from '@angular/core';
import { CarrierService } from '../../services/carrier.service';
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
    private loginService: CarrierService,
    private router: Router
  ){}

  ngOnInit(){
    if(this.loginService.isLogin()){
      this.router.navigate(['/dashboard'])
    }
  }
  
  loginUser(){

    var userDetails = {
      "username": this.userId,
      "password": this.password
    };
    
    this.loginService.loginUser(userDetails).subscribe(data => {
      
      if(data.token){

        localStorage.setItem('token', data.token);
        this.router.navigate(['/dashboard']);

      }
      else{

        this.status = true;

      }
      
    });

  }
  
 }
