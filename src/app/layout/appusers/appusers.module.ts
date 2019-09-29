import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppusersRoutingModule } from './appusers-routing.module';
import { AppusersComponent } from './appusers.component';
import {AgGridModule} from 'ag-grid-angular'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppusersComponent],
  imports: [
    CommonModule,
    AppusersRoutingModule,
    AgGridModule.withComponents([]),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AppusersModule { }
