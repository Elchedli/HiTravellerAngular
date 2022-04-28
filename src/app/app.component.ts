import { Component, OnInit } from '@angular/core';
import { Post } from './model/post';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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
 
    this.postService.getPosts().subscribe((data: Post[]) => (this.postList = data).forEach(p => { console.log(p); }))
  }

}
