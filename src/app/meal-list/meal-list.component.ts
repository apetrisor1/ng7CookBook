import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent implements OnInit {
	
  //container for meals
  allMeals: Object;

  //container for random meals
  randomMeals: Object;
  query: string = '';

  //container for all areas
  allAreas: Object;

  //container for all categories
  allCategories: Object;



  _showAreas: Boolean = false;
  _showCategories: Boolean = false;


  constructor(private data: DataService) { }



  ngOnInit() {
    this.data.getRandomMeal().subscribe(meals => {
        this.randomMeals = meals;
        }
    );
    
  	this.data.getMeals(this.query).subscribe(meals => {
        this.allMeals = meals;
        console.log(this.allMeals);
	      }
	  );
    this.data.getAreas().subscribe(meals => {
        this.allAreas = meals;
        });
    this.data.getCategories().subscribe(meals => {
        this.allCategories = meals;
        });

  //end of OnInit
  }


  // Save selected meal's ID, selected AREA and selected CATEGORY in data.service.ts, for later use when displaying
  prepareForShow(id) {
    this.data.mealId = id;
  }
  prepareArea(area) {
    this.data.strArea = area;
    console.log(area);
  }
  prepareCategory(categ) {
    this.data.strCategory = categ;
    console.log(categ);
  }




  toggleAreas() {
    if(!this._showAreas){
      this._showAreas = true;
    }
    else
    {
      this._showAreas = false;
    }
  }



  toggleCategories() {
    if(!this._showCategories){
      this._showCategories = true;
    }
    else
    {
      this._showCategories = false;
    }
  }

  hideDropdowns(){
    this._showAreas = false;
    this._showCategories = false;
  }

  getMealsByArea(area){
    this.data.getMealsByArea(area).subscribe(meals => {
        this.allMeals = meals;
        console.log(this.allMeals);
        }
    );
  }

  getAnotherRandom(){
    this.data.getRandomMeal().subscribe(meals => {
        this.randomMeals = meals;
        console.log(this.allMeals);
        }
    );
  }


  
}
