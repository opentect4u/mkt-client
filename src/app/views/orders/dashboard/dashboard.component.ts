import { Component, OnInit } from '@angular/core';
import { CarrierService } from '../../../services/carrier.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private services: CarrierService,
      private router: Router
  ) { }

  orders: object[];

  ngOnInit() {

    this.services.request('get', 'orders').subscribe((res: any) => {
      if(res.token == false){
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      }

      this.orders = res;

    })

  }

}
