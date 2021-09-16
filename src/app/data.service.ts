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

}
