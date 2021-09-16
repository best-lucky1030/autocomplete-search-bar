import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../../data.service';
import { Post } from '../../post';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  myControl = new FormControl;
  // filteredOptions: Observable<string[]>;
  allPosts: Post[];
  autoCompleteList: any[];

  constructor(
    private dataService: DataService
  ) {
    this.allPosts = [];
    this.autoCompleteList = [];
  }

  ngOnInit(): void {

    // get all the posts
    this.dataService.getPosts().subscribe(posts => {
      this.allPosts = posts;
    });
  }

}
