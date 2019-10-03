import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ManagetopicsComponent} from './managetopics.component'

const routes: Routes = [
  {
      path: '',
      component: ManagetopicsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagetopicsRoutingModule { }
