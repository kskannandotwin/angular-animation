import { Component, HostBinding, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';
import { Course } from './course.model';
import { courseAddState, listStateTrigger, newCourseState, triggerState } from './animations';
import { AnimationEvent } from '@angular/animations';
import { routeAnimationState, routeSlideAnimationState } from '../shared/route-animations';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  animations: [triggerState, courseAddState, newCourseState, routeAnimationState, routeSlideAnimationState, listStateTrigger]
})
export class CoursesComponent implements OnInit {

  @HostBinding('@routeSlideAnimationTrigger') routeAnimation = true;

  courses: Course[] = [];
  selectedCourseIndex!: number;
  coursesLoaded = false;
  createNewCourse = false;

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.coursesService.getCourses().subscribe(courses => {
      this.courses = courses;
      this.coursesLoaded = true;
    });
  };

  onStatusUpdate(newValue: string, index: number) {
    this.courses[index].status = newValue;
  };

  onCourseDelete(index: number) {
    this.courses.splice(index, 1);
  }

  onCourseSelected(index: number) {
    this.selectedCourseIndex = index;
  }

  onCourseCreate() {    
    this.createNewCourse = true;
  }

  courseCreated(event: Course) {
    this.courses.push(event);
    this.createNewCourse = false;
  }

  courseCancel() {
    this.createNewCourse = false;
  }  
}
