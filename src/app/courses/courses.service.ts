import { Injectable } from "@angular/core";
import { Course } from "./course.model";
import { Observable, Observer } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class CoursesService {
    courses: Course[] = [
        {
            name: 'Angular Complete Course',
            description: 'Learn Angular Complete Course',
            status: 'Active'
        },
        {
            name: 'Javascript Complete Course',
            description: 'Learn Javascript Complete Course',
            status: 'Active'
        },
        {
            name: 'HTML and CSS Complete Course',
            description: 'Learn HTML and CSS Complete Course',
            status: 'Active'
        }
    ];

    getCourses(): Observable<Course[]> {
        const courseObservable = new Observable((observer: Observer<Course[]>) => {
            setTimeout(() => {
                observer.next(this.courses);
            }, 2000);
        });
        return courseObservable;
    }
}