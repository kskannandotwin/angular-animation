import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staggered-animation',
  templateUrl: './staggered-animation.component.html',
  styleUrls: ['./staggered-animation.component.css'],
  animations: [
    trigger('stagger', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0 }),
          stagger(200, [
            animate('0.7s', style({ opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})

export class StaggeredAnimationComponent implements OnInit {

  items = ['Kannan', 'Janani', 'Roja', 'Mister'];
  show = true;

  constructor() { }

  ngOnInit(): void {   
  }
}
