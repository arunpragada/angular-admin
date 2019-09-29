import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ApprolesComponent} from './approles.component'


const routes: Routes = [
  {
      path: '',
      component: ApprolesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApprolesRoutingModule { }
