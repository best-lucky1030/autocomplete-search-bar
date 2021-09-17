import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
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

    @ViewChild('autoCompleteInput') autoCompleteInput: ElementRef;
    @Output() onSelectedOption = new EventEmitter();
  }

  ngOnInit(): void {

    // get all the posts
    this.dataService.getPosts().subscribe(posts => {
      this.allPosts = posts;
    });

    // when user types something in input, the value changes will come through MatChipsModule
    this.myControl.valueChanges.subscribe(userInput => {
      this.autoCompleteExpenseList(userInput);
    })
  }


  private autoCompleteExpenseList(input) {
    let categoryList = this.filterCategoryList(input)
    this.autoCompleteList = categoryList;
  }

  // this is where filtering the data happens according to you typed value
  filterCategoryList(val) {
    var categoryList = []
    if (typeof val != "string") {
      return [];
    }

    if (val === '' || val === null) {
      return [];
    }

    return val ? this.allPosts.filter(s => s.title.toLowerCase().indexOf(val.toLowerCase())) : this.allPosts;
  }

}
