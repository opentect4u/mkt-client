import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportComponent } from './report/report.component';
import { ExcelService } from '../../services/excel.service';
@NgModule({
  declarations: [ReportComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ],
  providers: [ExcelService]
})
export class ReportsModule { }
