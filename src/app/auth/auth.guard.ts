import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CarrierService } from '../services/carrier.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
    private logingService: CarrierService,
    private router: Router
  ){}

  canActivate(): boolean{

    if(this.logingService.isLogin()){
      return true;
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }
    
  }
  
}
