import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarrierService } from '../../../services/carrier.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  fGroup: FormGroup;
  
  constructor(private router: Router,
    private route: ActivatedRoute,
    private services: CarrierService,
    private formBuilder: FormBuilder
  ) {
      this.fGroup = this.formBuilder.group({
        userid: [null, Validators.required],
        status: ['A', Validators.required],
        name: [null, Validators.compose([
          Validators.required, 
          Validators.pattern(/^[a-zA-Z ]*$/)
        ])],
        userType: [null],
        password: [null]
    })
  }

  ngOnInit() {

    this.route.params.subscribe( params => {
      if(params['id']){
        this.services.request('get', ['users', 'user'], null, params['id']).subscribe((res: any) => {
          if(res.token == false){
            localStorage.removeItem('token');
            this.router.navigate(['/login']);
          }

          this.fGroup.setValue({
            userid: res[0].user_id,
            status: res[0].user_status,
            name: res[0].user_name,
            userType: res[0].user_type,
            password: null
          });
  
        });
      }
      else{
        this.fGroup.controls['password'].setValue('R');
      }

    });

  }

  submit(){

    this.route.params.subscribe( params => {
      if(!params['id']){
        this.addUser();
      }else{
        this.editUser();
      }
    })

  }

  //Add User
  addUser(){
    this.services.request('post', ['users', 'add'], this.fGroup.value).subscribe((res: any) => {
      if(res.token == false){
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      }
      this.router.navigate(['/signup']);

    });
  }

  //Edit User
  editUser(){

    this.route.params.subscribe( params => {
      this.services.request('put', ['users', 'update'], this.fGroup.value, params['id']).subscribe((res: any) => {
        if(res.token == false){
          localStorage.removeItem('token');
          this.router.navigate(['/login']);
        }
        this.router.navigate(['/signup']);
      });
    });
  }

}
