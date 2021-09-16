import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import {Post} from '../../post';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  post: Post[]
  constructor(
    private dataService: DataService
  ) {
    this.post = [];
  }

  ngOnInit(): void {
    this.dataService.getPosts().subscribe(posts => {
      this.post = posts;
      this.dataService.postsData = posts;
    });
  }

}
