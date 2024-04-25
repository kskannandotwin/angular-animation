import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  isActive: String = 'is-active';
  
  getActiveClasses() {
    return ['isActive']
  }

  constructor() { }

  ngOnInit(): void {
  }

}