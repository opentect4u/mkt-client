import { Component, OnInit } from '@angular/core';
import { CarrierService } from '../../../services/carrier.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  details: object[];

  constructor(private services: CarrierService,
              private router: Router
    ) { }

  ngOnInit() {

    this.services.request('get', ['orders', 'report']).subscribe((res: any) => {
      if(res.token == false){
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      }
      this.details = res;
    })

  }

}
