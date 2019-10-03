import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostsmoderzComponent} from './postsmoderz.component'


const routes: Routes = [
  {
      path: '',
      component: PostsmoderzComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsmoderzRoutingModule { }
