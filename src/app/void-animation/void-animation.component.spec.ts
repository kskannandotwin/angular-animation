import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoidAnimationComponent } from './void-animation.component';

describe('VoidAnimationComponent', () => {
  let component: VoidAnimationComponent;
  let fixture: ComponentFixture<VoidAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoidAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoidAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
