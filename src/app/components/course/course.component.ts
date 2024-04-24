import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CourseComponent implements OnInit {

  @Input() course!: Course;

  constructor() { }

  ngOnInit(): void {
  }

}
