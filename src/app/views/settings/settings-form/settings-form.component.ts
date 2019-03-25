import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarrierService } from '../../../services/carrier.service';

@Component({
  selector: 'app-settings-form',
  templateUrl: './settings-form.component.html',
  styleUrls: ['./settings-form.component.scss']
})
export class SettingsFormComponent implements OnInit {
  
  fGroup: FormGroup;
  status: boolean = false;
  msg: string;
  style: object;

  constructor(private router: Router,
    private services: CarrierService,
    private formBuilder: FormBuilder
  ) {
      this.fGroup = this.formBuilder.group({
        oldPassword: [null, Validators.required],
        passwords: this.formBuilder.group({
          password: [null, Validators.required],
          repeat:   [null, Validators.required]
        })
    })
  }

  ngOnInit() { }

  submit(){

    var pass = this.fGroup.controls['passwords'].value.password;
    var conPass = this.fGroup.controls['passwords'].value.repeat;

    if ((conPass != null) && (pass!= conPass)) {

      this.status = true;

    }
    else{
      this.status = false;
      let data = {
        oldPass: this.fGroup.controls['oldPassword'].value,
        newPass: pass
      }
      this.services.request('put', ['users', 'updatepass'], data).subscribe((res: any) => {
        this.style = {
          'float': 'right',
          'color': (res.process == 'successfull')? 'green' : 'red'
        }
        this.msg = res.msg;

      })
    }

  }

}
