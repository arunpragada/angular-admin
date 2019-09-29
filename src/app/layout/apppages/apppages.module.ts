import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ApppagesComponent} from './apppages.component';
import { ApppagesRoutingModule } from './apppages-routing.module';
import {AgGridModule} from 'ag-grid-angular'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [ApppagesComponent],
  imports: [
    CommonModule,
    ApppagesRoutingModule,
    AgGridModule.withComponents([]),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbCarouselModule,
    NgbAlertModule
  ]
})
export class ApppagesModule { }
