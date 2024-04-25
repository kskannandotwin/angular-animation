import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  isActive: boolean = true;
  
  getActiveClasses() {
    return ['isActive']
  }

  getColor() {
    return this.isActive ? 'green' : 'red';
  }

  constructor() { }

  ngOnInit(): void {
  }

}