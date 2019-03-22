import { Component, OnInit } from '@angular/core';
import { CarrierService } from '../../../services/carrier.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  users: any;

  constructor(private services: CarrierService) { }

  ngOnInit() {

    this.services.request('get', 'users').subscribe((res) => {
      
      this.users = res;

    })

  }

  chanheaStatus(empNo, status){

    this.services.request('put', ['users', 'status'], null, [empNo, (status == 'A')? 'I' : 'A']).subscribe((data) => {

      for(let i = 0; i < this.users.length; i++){
        if(this.users[i]['emp_id'] == empNo){
          this.users[i]['user_status'] = (status == 'A')? 'I' : 'A';
        }
      }

    });

  }

}
