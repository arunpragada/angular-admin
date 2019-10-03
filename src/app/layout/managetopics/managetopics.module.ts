import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ManagetopicsComponent} from './managetopics.component';

import { ManagetopicsRoutingModule } from './managetopics-routing.module';


@NgModule({
  declarations: [ManagetopicsComponent],
  imports: [
    CommonModule,
    ManagetopicsRoutingModule
  ]
})
export class ManagetopicsModule { }
