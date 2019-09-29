import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApppagesComponent } from './apppages.component';

const routes: Routes = [
  {
      path: '',
      component: ApppagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApppagesRoutingModule { }
