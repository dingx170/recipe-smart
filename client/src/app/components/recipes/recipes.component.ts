import { Component, OnInit } from '@angular/core';
import { FoodAllergy } from '../../enums/food-allergy.enum'
import { Cuisine } from '../../enums/cuisine.enum'
import { Feature } from '../../enums/feature.enum'
import { MealType } from '../../enums/meal-type.enum'
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  public allergies = Object.keys(FoodAllergy).filter(key => key != "None");
  public cuisineTypes = Object.keys(Cuisine).filter(key => key != "None");
  public featureTypes = Object.keys(Feature).filter(key => key != "None");
  public mealTypes = Object.keys(MealType).filter(key => key != "None");
  public groupSizes = [1, 2, 3, 4, 5];
  public budgets = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  public filter: any = {
    meal_types: [],
    feature_types: [],
    cuisine_types: [],
    name: '',
    cost: 100
  };

  public recipes: any;

  constructor(public recipeService:RecipeService) { }

  ngOnInit(): void {
    
    this.showAllRecipes();

  }

  showAllRecipes() {
    
    var rxjsData = this.recipeService.getAllRecipes();

    rxjsData.subscribe((data) => {
      this.recipes = data;
    })    
  }

  filterRecipes(filter: any) {

    this.filter.meal_types
    
    var rxjsData = this.recipeService.getRecipesByFilter(filter);

    rxjsData.subscribe((data) => {
      this.recipes = data;
    })   
  }

}
