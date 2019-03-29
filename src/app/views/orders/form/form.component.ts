import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarrierService } from '../../../services/carrier.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  
  fGroup: FormGroup;
  dependencies: any = {};

  constructor(private router: Router,
    private route: ActivatedRoute,
    private services: CarrierService,
    private formBuilder: FormBuilder,
    public datePipe: DatePipe
  ) {
      this.fGroup = this.formBuilder.group({
        prjectName: [null, Validators.required],
        projectType: [null, Validators.required],
        socPerson: [null],
        contactNo: [null, Validators.compose([
       
          Validators.pattern(/^-?(0|[0-9]\d*)?$/),
          Validators.minLength(10),
          Validators.maxLength(10)
  
        ])],
        designation: [null],
        dist: [null, Validators.required],
        block: [null],
        orderDt: [null, Validators.required],
        orderDetails: [null],
        orderValue: [null],
        tax: ['Excluding Tax'],
        paymentTerms: [null],
        monthlyRental:[null],
        paymentStatus: [null],
        proposedInstlDt:[null],
        installedBy: [null],
        installationDate: [null],
        sssRemarks: [null],
        customerRemarks: [null],
    })
  }

  ngOnInit() {

    this.route.params.subscribe((params) => {
      if(params['id']){

        this.services.request('get', ['orders', 'getorder'], null, params['id']).subscribe(res => {
          this.fGroup.setValue({
            prjectName: res[0].project_name,
            projectType: res[0].project_type,
            socPerson: res[0].contact_person,
            contactNo: res[0].contact_no,
            designation: res[0].designation,
            dist: res[0].dist,
            block: res[0].block,
            orderDt: this.datePipe.transform(res[0].order_dt, 'yyyy-MM-dd'),
            orderDetails: res[0].order_dtls,
            orderValue: res[0].order_value,
            tax: res[0].tax,
            paymentTerms: res[0].payment_terms,
            monthlyRental: res[0].monthly_rental,
            paymentStatus: res[0].payment_status,
            proposedInstlDt: this.datePipe.transform(res[0].proposed_instl_dt, 'yyyy-MM-dd'),
            installedBy: res[0].installed_by,
            installationDate: this.datePipe.transform(res[0].installation_dt, 'yyyy-MM-dd'),
            sssRemarks: res[0].sss_remarks,
            customerRemarks: res[0].cust_remarks
          });

        });
      }

    });

    this.services.request('get', ['orders', 'dependencies']).subscribe((res: any)=> {
      
      this.dependencies = res;

    });

  }

  submit(){

    this.route.params.subscribe( params => {
      if(!params['id']){
        this.addOrder();
      }else{
        this.editOrder(params['id']);
      }
    })

  }

  addOrder(){
    this.services.request('post', ['orders', 'details'], this.fGroup.value).subscribe(()=>{
      
      this.router.navigate(['/orders']);

    })
  }

  editOrder(params){
    this.services.request('put', ['orders', 'editdetails'], this.fGroup.value, params).subscribe(()=>{
      
      this.router.navigate(['/orders']);

    })
  }
}
