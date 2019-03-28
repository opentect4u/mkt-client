import { Component, OnInit } from '@angular/core';
import { CarrierService } from '../../../services/carrier.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  users: any;

  constructor(private services: CarrierService,
              private router: Router
    ) { }

  ngOnInit() {

    this.services.request('get', 'users').subscribe((res: any) => {
      if(res.token == false){
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      }
      this.users = res;

    })

  }

  chanheaStatus(empNo, status){

    this.services.request('put', ['users', 'status'], null, [empNo, (status == 'A')? 'I' : 'A']).subscribe((data: any) => {
      if(data.token == false){
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      }
      let tmpIndx = this.users.findIndex(x=> x.emp_id === empNo);
      this.users[tmpIndx]['user_status'] = (status == 'A')? 'I' : 'A';
      // for(let i = 0; i < this.users.length; i++){
        

      //   // if(this.users[i]['emp_id'] == empNo){
      //   //   this.users[i]['user_status'] = (status == 'A')? 'I' : 'A';
      //   // }
      // }

    });

  }

}
