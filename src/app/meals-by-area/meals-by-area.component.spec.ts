import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsByAreaComponent } from './meals-by-area.component';

describe('MealsByAreaComponent', () => {
  let component: MealsByAreaComponent;
  let fixture: ComponentFixture<MealsByAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealsByAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealsByAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
