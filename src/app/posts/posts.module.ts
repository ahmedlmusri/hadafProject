import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddPostsComponent } from './add-posts/add-posts.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'edit/:id', component: AddPostsComponent },

]

@NgModule({
  declarations: [ListComponent, AddPostsComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class PostsModule { }
