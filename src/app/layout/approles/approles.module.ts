import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApprolesRoutingModule } from './approles-routing.module';
import { ApprolesComponent } from './approles.component';
import {AgGridModule} from 'ag-grid-angular'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ApprolesComponent],
  imports: [
    CommonModule,
    ApprolesRoutingModule,
    AgGridModule.withComponents([]),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ApprolesModule { }
