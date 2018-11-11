import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsByQueryComponent } from './meals-by-query.component';

describe('MealsByQueryComponent', () => {
  let component: MealsByQueryComponent;
  let fixture: ComponentFixture<MealsByQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealsByQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealsByQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
