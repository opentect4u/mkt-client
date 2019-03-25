import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsFormComponent } from './settings-form/settings-form.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Settings'
    },
    children: [
      {
        path: '',
        data: {
          title: 'Dashboard'
        },
        component: SettingsFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
