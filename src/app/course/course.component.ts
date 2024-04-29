import { Component, ElementRef, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { Course } from '../courses/course.model';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  @Input() course!: Course;
  @ViewChild('statusRef') statusRef!: ElementRef<HTMLSelectElement>;
  @Output() statusUpdated = new EventEmitter<string>();
  @Output() courseDeleted = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onStatusUpdate() {
    const selectedValue = this.statusRef.nativeElement.value;
    this.statusUpdated.emit(selectedValue)
  }

  onCourseDelete() {
    this.courseDeleted.emit();
  }

}
