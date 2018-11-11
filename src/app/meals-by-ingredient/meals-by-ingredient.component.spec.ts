import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsByIngredientComponent } from './meals-by-ingredient.component';

describe('MealsByIngredientComponent', () => {
  let component: MealsByIngredientComponent;
  let fixture: ComponentFixture<MealsByIngredientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealsByIngredientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealsByIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
