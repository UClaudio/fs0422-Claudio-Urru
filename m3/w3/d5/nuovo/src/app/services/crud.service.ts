import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class CRUDService {

  constructor(private http:HttpClient) { }


  apiUrl:string = 'http://localhost:5432/'

  getAllUsers():Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl + "users")
  }
  getAllPosts():Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl + "Posts")
  }

  addPost(post: Post ) {
    return this.http.post<Post>(this.apiUrl,post)
  }

  editPost(post: Post) {
    return this.http.patch<Post>(this.apiUrl+'/'+post.id,post)
  }

  deletePost(post: Post) {
    return this.http.delete<Post>(this.apiUrl+'/'+post.id)
  }
  removeUser(user: User) {
    return this.http.delete<User>(this.apiUrl+"users/"+user.id)
  }
}
