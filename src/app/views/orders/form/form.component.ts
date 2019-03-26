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
        password: [null]
    })
  }

  ngOnInit() {
  }

}
