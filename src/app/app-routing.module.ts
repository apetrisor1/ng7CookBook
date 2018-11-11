import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { MealComponent } from './meal/meal.component';
import { MealListComponent } from './meal-list/meal-list.component';
import { MealsByAreaComponent } from './meals-by-area/meals-by-area.component';
import { MealsByCategoryComponent } from './meals-by-category/meals-by-category.component';
import { MealsByIngredientComponent } from './meals-by-ingredient/meals-by-ingredient.component';
import { MealsByQueryComponent } from './meals-by-query/meals-by-query.component';



const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'ingredients', component: IngredientsComponent },
    { path: 'meal-list', component: MealListComponent },
    { path: 'meal-list-query/:strQuery', component: MealsByQueryComponent },
    { path: 'meal-list-area/:strArea', component: MealsByAreaComponent },
    { path: 'meal-list-category/:strCategory', component: MealsByCategoryComponent },
    { path: 'meal-list-ingredient/:strIngredient', component: MealsByIngredientComponent },
    { path: 'meal-detail/:mealId', component: MealComponent },
    { path: '**', redirectTo: '', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
