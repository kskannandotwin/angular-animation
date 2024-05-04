import { Component, OnInit } from '@angular/core';
import { conditionalAnimation, shrinkAnimation } from './conditional-animation';

@Component({
  selector: 'app-void-animation',
  templateUrl: './void-animation.component.html',
  styleUrls: ['./void-animation.component.css'],
  animations: [conditionalAnimation, shrinkAnimation]
})
export class VoidAnimationComponent implements OnInit {

  showContent = false;
  width: number = 400;
  animate = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleContent() {
    this.showContent = !this.showContent;
  }

}
