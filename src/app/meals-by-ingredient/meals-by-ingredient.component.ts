import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-meals-by-ingredient',
  templateUrl: './meals-by-ingredient.component.html',
  styleUrls: ['./meals-by-ingredient.component.css']
})
export class MealsByIngredientComponent implements OnInit {

  //container for meals
  allMeals: Object;

  //ingredient selector
  strIngredient: string = '';


  constructor(private data: DataService) { }

  ngOnInit() {
  	this.strIngredient = this.data.strIngredient;
  	this.data.getMealsByIngredient(this.strIngredient).subscribe(meals => {
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
