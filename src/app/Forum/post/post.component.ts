import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import {  Post } from  '../../model/post'
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postList: Post[] = [];
  post!: Post;
  nb: number = 0;
  constructor(private postService:PostService) { 
    
  }
  calcul() {
    this.nb = 0
    this.postList.forEach(post => {
     
        this.nb++;
                                  }
    
                         );
           }
  ngOnInit(): void {
    this.post=new Post();

    this.postService.getPosts().subscribe((data: Post[]) => (this.postList = data).forEach(p => { console.log(p) }))
  }
  deletePost(id: number) {
    this.postService.deletePost(id).subscribe(
      () => {
        this.postList.forEach(post => {
          if (post.id == id) {
            let posts = post
            let i = this.postList.indexOf(posts)
            this.postList.splice(i, 1)
          }
        })
      }
    )
  }
}
