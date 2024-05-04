import { Component, OnInit } from '@angular/core';
import { conditionalAnimation, listAnimation, shrinkAnimation } from './conditional-animation';

@Component({
  selector: 'app-void-animation',
  templateUrl: './void-animation.component.html',
  styleUrls: ['./void-animation.component.css'],
  animations: [conditionalAnimation, shrinkAnimation, listAnimation]
})
export class VoidAnimationComponent implements OnInit {

  showContent = false;
  width: number = 400;
  animate = false;
  listData: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  toggleContent() {
    this.showContent = !this.showContent;
  }

  onAddElement() {
    this.listData.push(Math.random());
  }

}
