import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-meals-by-area',
  templateUrl: './meals-by-area.component.html',
  styleUrls: ['./meals-by-area.component.css']
})
export class MealsByAreaComponent implements OnInit {

  //container for meals
  allMeals: Object;

  //area selector
  strArea: string = '';

  constructor(private data: DataService) { }

  ngOnInit() {

  	this.strArea = this.data.strArea;
  	this.data.getMealsByArea(this.strArea).subscribe(meals => {
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
