import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.css']
})
export class AddPostsComponent implements OnInit {
  id: number;
  message: string;
  isAlertMessage: boolean = false;
  post: any;
  dataObj: any = {
    title: null,
    body: null
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private postService: PostsService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.postService.getPost(this.id).subscribe(data => {
      this.post = data;
      this.dataObj.title = this.post.title;
      this.dataObj.body = this.post.body
    }, err => {
      console.log(err);
    })
  }

  submitData(form: NgForm) {
    this.postService.updatePost(this.id, this.dataObj).subscribe(data => {
      this.message = "Update Successfully";
      this.isAlertMessage = true;
    }, err => {
      console.log(err)
    })
  }

  deletePost(id) {
    this.postService.deletePosts(id).subscribe(data => {
      this.message = "Delete Successfully";
      this.isAlertMessage = true;
    }, err => {
      console.log(err);
    });
  }

}
