import { Injectable } from '@angular/core';
import { CanActivate, Router, CanActivateChild } from '@angular/router';
import { CarrierService } from '../services/carrier.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  
  constructor(
    private services: CarrierService,
    private router: Router
  ){}

  canActivate(): boolean{
    
    if(this.services.parseJwt(localStorage.getItem('token')).user.user_type == 'A'){
      return true;
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }
    
  }

  canActivateChild(): boolean{

    if(this.services.isLogin()){
      return true;
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }
    
  }
  
}
