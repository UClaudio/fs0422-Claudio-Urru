import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss']
})
export class ActivePostsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getPosts()
  }

  activePosts: Post[] = [];


  getPosts(): void {
    fetch("http://localhost:3000/posts")
    .then(response => response.json())
    .then(res => {
      for(let r of res) {
        if(r.active) {
          this.activePosts.push(r)
        }
      }
    })
  }
}
/*

res.active ? this.activePosts = res : this.unactivePosts = res

*/


