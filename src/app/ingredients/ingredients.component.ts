import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  //ingredient selector
  strIngredient: string = '';
  

  ingredients: Object;
  page1: boolean = true;
  page2: boolean = false;
  page3: boolean = false;
  page4: boolean = false;
  page5: boolean = false;
  page6: boolean = false;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getIngredients().subscribe(meals => {
        this.ingredients = meals;
        console.log(this.ingredients);
      }
    );
  }

  //Prepare meals with our main ingredient
  prepareIngredient(strIngredient) {
    this.data.strIngredient = strIngredient;
    this.strIngredient = strIngredient;
    console.log(strIngredient);
  }


  // PAGINATION
  show1() {
    this.page1 = true;
    this.page2 = false;
    this.page3 = false;
    this.page4 = false;
    this.page5 = false;
    this.page6 = false;
  }

  show2() {
    this.page1 = false;
    this.page2 = true;
    this.page3 = false;
    this.page4 = false;
    this.page5 = false;
    this.page6 = false;
  }

  show3() {
    this.page1 = false;
    this.page2 = false;
    this.page3 = true;
    this.page4 = false;
    this.page5 = false;
    this.page6 = false;
  }
  show4() {
    this.page1 = false;
    this.page2 = false;
    this.page3 = false;
    this.page4 = true;
    this.page5 = false;
    this.page6 = false;
  }
   show5() {
    this.page1 = false;
    this.page2 = false;
    this.page3 = false;
    this.page4 = false;
    this.page5 = true;
    this.page6 = false;
  }
   show6() {
    this.page1 = false;
    this.page2 = false;
    this.page3 = false;
    this.page4 = false;
    this.page5 = false;
    this.page6 = true;
  }
}
