import { Component, OnInit } from '@angular/core';
import { conditionalAnimation } from './conditional-animation';

@Component({
  selector: 'app-void-animation',
  templateUrl: './void-animation.component.html',
  styleUrls: ['./void-animation.component.css'],
  animations: [conditionalAnimation]
})
export class VoidAnimationComponent implements OnInit {

  showContent = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleContent() {
    this.showContent = !this.showContent;
  }

}
