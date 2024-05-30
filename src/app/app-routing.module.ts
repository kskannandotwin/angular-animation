import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaggeredAnimationComponent } from './staggered-animation/staggered-animation.component';

const routes: Routes = [
  { path: '', component: StaggeredAnimationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
