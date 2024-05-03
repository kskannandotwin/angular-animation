import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';
import { Course } from './course.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [];
  selectedCourseIndex!: number;
  coursesLoaded = false;

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
}
