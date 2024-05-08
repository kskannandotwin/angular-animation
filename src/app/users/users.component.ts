import { Component, HostBinding, OnInit } from '@angular/core';
import { routeAnimationState, routeSlideAnimationState } from '../shared/route-animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'], 
  animations: [routeAnimationState, routeSlideAnimationState]
})
export class UsersComponent implements OnInit {

  @HostBinding('@routeSlideAnimationTrigger') routeAnimation = true;

  constructor() { }

  ngOnInit(): void {
  }

}
