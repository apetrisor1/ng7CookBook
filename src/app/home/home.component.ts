import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  //container for all meals
  latestMeals: Object;


  // To use methods defined in data.service.ts, we instantiate DataService class in 'data'
  constructor(private data: DataService) { }


  // On first load we get the latest meals to display up front
  ngOnInit() {
    this.data.getLatestMeals().subscribe(meals => {
        this.latestMeals = meals;
        console.log(this.latestMeals);
      }
    );
  }

  // This saves our selected meal's ID in data.service.ts, for later use when displaying
  prepareForShow(id) {
    this.data.mealId = id;
  }


}
