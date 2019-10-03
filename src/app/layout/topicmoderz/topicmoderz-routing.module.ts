import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TopicmoderzComponent} from './topicmoderz.component'

const routes: Routes = [
  {
      path: '',
      component: TopicmoderzComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopicmoderzRoutingModule { }
