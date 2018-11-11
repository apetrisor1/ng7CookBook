import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-meals-by-query',
  templateUrl: './meals-by-query.component.html',
  styleUrls: ['./meals-by-query.component.css']
})
export class MealsByQueryComponent implements OnInit {

  //container for meals
  allMeals: Object;

  //query selector
  strQuery: string = '';

  constructor(private data: DataService) { }

  ngOnInit() {
  	this.strQuery = this.data.strQuery;
  	this.data.getMeals(this.strQuery).subscribe(meals => {
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
