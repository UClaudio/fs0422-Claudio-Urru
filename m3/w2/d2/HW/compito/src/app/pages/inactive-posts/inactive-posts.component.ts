import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss']
})
export class InactivePostsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getPosts()
  }

  unactivePosts: Post[] = [];

  getPosts(): void {
    fetch("http://localhost:3000/posts")
    .then(response => response.json())
    .then(res => {
      for(let r of res) {
        if(!r.active) {
          this.unactivePosts.push(r)
        }
      }
    })
  }

}

/*

r.active ?  : this.unactivePosts.push(r)

*/