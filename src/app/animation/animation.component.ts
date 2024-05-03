import { trigger, state, style, animate, transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    trigger('clickedState', [
      state('default', style({
        width: '50px',
        height: '100px',
        backgroundColor: 'orange'
      })),
      state('clicked', style({
        width: '100px',
        height: '50px',
        backgroundColor: 'blue'
      })),
      transition('default => clicked', animate('300ms ease-in')),
    ])
  ]
})
export class AnimationComponent implements OnInit {

  clickInfo = 'default';

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.clickInfo = 'clicked';
    }, 3000); // 2 seconds       
  }
}
