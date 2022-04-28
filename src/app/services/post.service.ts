import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../model/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
 

  constructor(private http: HttpClient) { }
  api: string = 'http://localhost:8083/voyageAffaires/forum';
  getPosts()
  {
    return this.http.get<Post[]>(this.api+'/posts');
  }
  addPost(post: Post) {
    return this.http.post(this.api+'/addPost', post);
  }
  deletePost(id: number) {
    return this.http.delete(this.api + '/dPost/' + id);
  }


updatePost(value: any): Observable<Object> {
return this.http.put(this.api + '/updatePost/', value);
}
                                
getOnePost(id: number): Observable<Object> {
 return this.http.get(this.api + '/post/'+id);
                               
}
}
