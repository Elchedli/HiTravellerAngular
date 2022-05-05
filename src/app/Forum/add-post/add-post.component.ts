import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import {  Post } from  '../../model/post'

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
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
  addPost(post: Post) {
  
    this.postService.addPost(post).subscribe(
      () => (this.postList.push(post))
    )

  }

}