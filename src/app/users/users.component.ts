import { Component, HostBinding, OnInit } from '@angular/core';
import { routeAnimationState } from '../shared/route-animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'], 
  animations: [routeAnimationState]
})
export class UsersComponent implements OnInit {

  @HostBinding('@routeAnimationTrigger') routeAnimation = true;

  constructor() { }

  ngOnInit(): void {
  }

}
