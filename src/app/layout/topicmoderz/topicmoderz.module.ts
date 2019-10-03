import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TopicmoderzComponent} from './topicmoderz.component';


import { TopicmoderzRoutingModule } from './topicmoderz-routing.module';


@NgModule({
  declarations: [TopicmoderzComponent],
  imports: [
    CommonModule,
    TopicmoderzRoutingModule
  ]
})
export class TopicmoderzModule { }
