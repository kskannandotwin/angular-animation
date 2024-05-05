import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Course } from '../courses/course.model';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent implements OnInit {

  @Output() courseCreated = new EventEmitter<Course>();
  @Output() courseCanceled = new EventEmitter<void>();

  constructor() { }

  courseForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl(''),
    status: new FormControl('')
  })
  statuses = ['Active', 'InActive', 'Draft'];

  ngOnInit(): void {
  }

  onCourseCreate() {
    console.log(this.courseForm.value);
    this.courseCreated.emit(this.courseForm.value as Course);
  }

  onCourseCancel() {
    this.courseCanceled.emit();
  }

}
