import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodAllergy } from '../../../enums/food-allergy.enum'
import { Cuisine } from '../../../enums/cuisine.enum'
import { Feature } from '../../../enums/feature.enum'
import { MealType } from '../../../enums/meal-type.enum'
import { IMealplan } from 'src/app/interfaces/imealplan';
import { IRecipe } from '../../../interfaces/irecipe'
import { MealplanService } from '../../../services/mealplan.service';
import { element } from 'protractor';
@Component({
  selector: 'app-newplan',
  templateUrl: './newplan.component.html',
  styleUrls: ['./newplan.component.css']
})
export class NewplanComponent implements OnInit {

  public allergies = Object.keys(FoodAllergy);
  public cuisineTypes = Object.keys(Cuisine);
  public featureTypes = Object.keys(Feature);
  public mealTypes = Object.keys(MealType);
  public groupSizes = [1, 2, 3, 4, 5];
  public budgets = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  public mealplan: any = {
    group: 0,
    budget: 0,
    date:0,
    meal_type: MealType.None,
    cuisine_type: Cuisine.None,
    feature_type: Feature.None,
    restrictions: [FoodAllergy.None],
    recipe_list: []
  }


  public filter: any = {
    group: 0,
    budget: 0,
    meal_type: MealType.None,
    cuisine_type: Cuisine.None,
    feature_type: Feature.None,
    restrictions: [FoodAllergy.None]
  }

  // public recipequality: ;
  public recipelist: any[] = []; 
  public gotrecipes: boolean;
  

  constructor(public mealplanService: MealplanService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.gotrecipes = false;
    // this.recipelist = [{ name: "Hot Pepper and Onion Pizza"},
    //                     { name: "Beef Gyros"},]
  }

  getRecipesForCustomized(){
    var rxjsData = this.mealplanService.getRecipesByFilter(this.filter);
    this.mealplan.recipe_list = [];
    rxjsData.subscribe((data) => {
      this.recipelist = <IRecipe[]>data;
      this.gotrecipes = true;
      this.recipelist.forEach(element => {
        // delete element.photo;
        this.mealplan.recipe_list.push({recipe: element, quantity:0});
      });

      console.log('meal plan: ', this.mealplan);
    }) 
  }

  createMealPlan(){
    // this.mealplan.budget = this.filter.budget;
    this.mealplan.group = this.filter.group;
    // this.mealplan.meal_type = this.filter.meal_type;
    // this.mealplan.cuisine_type = this.filter.cuisine_type;
    // this.mealplan.feature_type = this.filter.feature_type;
    this.gotrecipes = false;
    this.mealplan.date = new Date();
    this.mealplan.recipe_list.forEach((element:any) =>{
      delete element.recipe.photo;
    });
    var rxjsData = this.mealplanService.postNewMealplan(this.mealplan);
    rxjsData.subscribe((data) => {
      console.log(data);
      alert("Success!");
    }) 
  }

}
