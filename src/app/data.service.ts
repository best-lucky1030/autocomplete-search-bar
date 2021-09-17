import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  searchOption = []
  public postsData: Post[]
  postUrl : string = "https://jsonplaceholder.typicode.com/posts"

  constructor(
    private http: HttpClient
  ) {
    this.postsData = [];
  }

  getPosts() : Observable<Post[]> {
    return this.http.get<Post[]>(this.postUrl);
  }

  filteredListOptions() {
    let posts = this.postsData;
    let filteredPostsList = [];

    for (let post of posts) {
      for (let options of this.searchOption) {
        if (otpions.title === post.title) {
          filteredPostsList.push(post);
        }
      }
    }
    console.log(filteredPostsList);
    return filteredPostsList;
  }

}
