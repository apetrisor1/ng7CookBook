import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { FooterComponent } from './footer/footer.component';
import { MealComponent } from './meal/meal.component';
import { MealListComponent } from './meal-list/meal-list.component';
import { MealsByAreaComponent } from './meals-by-area/meals-by-area.component';
import { MealsByCategoryComponent } from './meals-by-category/meals-by-category.component';
import { MealsByIngredientComponent } from './meals-by-ingredient/meals-by-ingredient.component';
import { MealsByQueryComponent } from './meals-by-query/meals-by-query.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    IngredientsComponent,
    FooterComponent,
    MealComponent,
    MealListComponent,
    MealsByAreaComponent,
    MealsByCategoryComponent,
    MealsByIngredientComponent,
    MealsByQueryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
