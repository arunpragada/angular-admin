import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import { PageHeaderModule } from './../../shared';
import { AgGridModule } from 'ag-grid-angular';
@NgModule({
    imports: [CommonModule, TablesRoutingModule, PageHeaderModule,AgGridModule.withComponents([])],
    declarations: [TablesComponent]
})
export class TablesModule {}
