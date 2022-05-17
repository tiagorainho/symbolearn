import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisesCardComponent } from './exercises-card.component';

describe('ExercisesCardComponent', () => {
  let component: ExercisesCardComponent;
  let fixture: ComponentFixture<ExercisesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercisesCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
