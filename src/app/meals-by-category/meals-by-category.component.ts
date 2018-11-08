import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-meals-by-category',
  templateUrl: './meals-by-category.component.html',
  styleUrls: ['./meals-by-category.component.css']
})
export class MealsByCategoryComponent implements OnInit {

  //container for meals
  allMeals: Object;

  //category selector
  strCategory: string = '';

  constructor(private data: DataService) { }

  ngOnInit() {
  	this.strCategory = this.data.strCategory;
  	this.data.getMealsByCategory(this.strCategory).subscribe(meals => {
        this.allMeals = meals;
        console.log(this.allMeals);
	      }
	  );
  //end of onInit
  }
  prepareForShow(id) {
    this.data.mealId = id;
  }

}
