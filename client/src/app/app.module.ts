import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from "@angular/common/http";

import { AdsComponent } from './components/ads/ads.component';
import { HeaderBaseComponent } from './components/header-base/header-base.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { MealplanComponent } from './components/mealplan/mealplan.component';
import { NewplanComponent } from './components/mealplan/newplan/newplan.component';
import { OldplanComponent } from './components/mealplan/oldplan/oldplan.component';
import { MyrecipeComponent } from './components/myrecipe/myrecipe.component';
import { OldrecipeComponent } from './components/myrecipe/oldrecipe/oldrecipe.component';
import { NewrecipeComponent } from './components/myrecipe/newrecipe/newrecipe.component';
import { UserProfilesComponent } from './components/user-profiles/user-profiles.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { RecipeContentComponent } from './components/recipe-content/recipe-content.component';
import { ShoppinglistComponent } from './components/mealplan/oldplan/shoppinglist/shoppinglist.component';
import { RecipelistComponent } from './components/mealplan/oldplan/recipelist/recipelist.component';


import { LoginService } from './services/login.service';
import { MealplanService } from './services/mealplan.service';
import { RecipeService } from './services/recipe.service';
import { ShareDataService } from './services/share-data.service';
import { UserService } from './services/user.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    AdsComponent,
    HeaderBaseComponent,
    MealplanComponent,
    NewplanComponent,
    OldplanComponent,
    MyrecipeComponent,
    OldrecipeComponent,
    NewrecipeComponent,
    UserProfilesComponent,
    SignupComponent,
    LoginComponent,
    RecipeContentComponent,
    ShoppinglistComponent,
    RecipelistComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [
    LoginService,
    MealplanService,
    RecipeService,
    ShareDataService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
