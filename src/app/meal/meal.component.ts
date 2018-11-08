import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {

  //container for meal
  mealToShow: Object;
  mealId: Number = 0;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.mealId = this.data.mealId;
    if(this.mealId == 0){
      let fullUrl = window.location.href;

      // FIND A BETTER SOLUTION this is ridiculous
      
      let requestedId = fullUrl.substring(34,100);
      this.mealId = Number.parseInt(requestedId,10);
    }
  	this.data.getMealDetails(this.mealId).subscribe(meals => {
        this.mealToShow = meals;
        console.log(this.mealToShow);
	  });



  }




}

