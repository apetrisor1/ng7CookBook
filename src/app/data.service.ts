import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class DataService {

  showLatestMeals: Boolean = true;
  showAllMeals: Boolean = false;

  // keep track of selected meal, area, category or query
  mealId: Number = 0;
  strArea: string = '';
  strCategory: string = '';
  strIngredient: string = '';
  strQuery: string = '';

  constructor(private http: HttpClient) { }


  getLatestMeals(){
  	return this.http.get('https://www.themealdb.com/api/json/v1/1/latest.php')
  }

  getMealsByCategory(category){
  	return this.http.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
  }

  getMealsByArea(area){
  	return this.http.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
  }

  getMealsByIngredient(ingredient){
    return this.http.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  }

  getMealDetails(mealId){
  	return this.http.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
  }

  getMeals(q){
    return this.http.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${q}`);
  }

  getRandomMeal(){
    return this.http.get('https://www.themealdb.com/api/json/v1/1/random.php');
  }

  getAreas(){
    return this.http.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
  }

  getCategories(){
    return this.http.get('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
  }

  getIngredients(){
    return this.http.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
  }






}
