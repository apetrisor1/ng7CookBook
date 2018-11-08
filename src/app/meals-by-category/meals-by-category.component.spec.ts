import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsByCategoryComponent } from './meals-by-category.component';

describe('MealsByCategoryComponent', () => {
  let component: MealsByCategoryComponent;
  let fixture: ComponentFixture<MealsByCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealsByCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealsByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
