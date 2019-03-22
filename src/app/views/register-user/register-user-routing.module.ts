import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Register User'
    },
    children: [
      {
        path: '',
        data: {
          title: 'Dashboard'
        },
        component: DashboardComponent
      },
      {
        path: 'form',
        data: {
          title: 'Form'
        },
        component: FormComponent
      },
      {
        path: 'form/:id',
        data: {
          title: 'Form'
        },
        component: FormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterUserRoutingModule { }
