import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  @ViewChild('authorRef') authorElement!: ElementRef<HTMLDivElement>;
  isActive: boolean = true;

  getActiveClasses() {
    return ['isActive']
  }

  getColor() {
    return this.isActive ? 'green' : 'red';
  }

  changeColor() {
    this.renderer.setStyle(this.authorElement.nativeElement, 'color', 'green');
  }

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    console.log(this.authorElement);
  }

  ngOnInit(): void {

  }

}