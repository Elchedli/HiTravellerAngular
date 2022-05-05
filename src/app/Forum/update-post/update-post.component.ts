import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import {  Post } from  '../../model/post'
@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
  postList: Post[] = [];
  post!: Post;
  nb: number = 0;
  router: any;
  submitted!: boolean;
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
  UpdatePost(post:Post) {
    this.postService.updatePost(this.post)
    .subscribe(data => {
      console.log(data);
      this.post = new Post();
      this.gotoList();
    }, error => console.log(error));
}

onSubmit() {
  this.submitted = true;
  this.UpdatePost(this.post); 
  alert("Post updated successfully");  
  this.gotoList(); 
}

gotoList() {
  this.router.navigate(['/post']);
}
  }

