import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostsmoderzComponent} from './postsmoderz.component';
import { PostsmoderzRoutingModule } from './postsmoderz-routing.module';


@NgModule({
  declarations: [PostsmoderzComponent],
  imports: [
    CommonModule,
    PostsmoderzRoutingModule
  ]
})
export class PostsmoderzModule { }
