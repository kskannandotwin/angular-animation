import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaggeredAnimationComponent } from './staggered-animation.component';

describe('StaggeredAnimationComponent', () => {
  let component: StaggeredAnimationComponent;
  let fixture: ComponentFixture<StaggeredAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaggeredAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaggeredAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
