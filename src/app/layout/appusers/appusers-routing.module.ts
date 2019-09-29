import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppusersComponent } from './appusers.component';


const routes: Routes = [
  {
      path: '',
      component: AppusersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppusersRoutingModule { }
