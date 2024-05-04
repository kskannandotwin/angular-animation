import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { UsersComponent } from './users/users.component';
import { CourseComponent } from './course/course.component';
import { AnimationComponent } from './animation/animation.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { VoidAnimationComponent } from './void-animation/void-animation.component';
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    UsersComponent,
    CourseComponent,
    AnimationComponent,
    OpenCloseComponent,
    VoidAnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }