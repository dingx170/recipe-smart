import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodAllergy } from '../../../enums/food-allergy.enum'
import { Cuisine } from '../../../enums/cuisine.enum'
import { Feature } from '../../../enums/feature.enum'
import { MealType } from '../../../enums/meal-type.enum'
import { RecipeTag } from '../../../enums/recipe-tag.enum'
import { IRecipe } from '../../../interfaces/irecipe'
import { RecipeService } from '../../../services/recipe.service';

@Component({
  selector: 'app-newrecipe',
  templateUrl: './newrecipe.component.html',
  styleUrls: ['./newrecipe.component.css']
})

export class NewrecipeComponent implements OnInit {

  public allergies = Object.keys(FoodAllergy);
  public cuisineTypes = Object.keys(Cuisine);
  public featureTypes = Object.keys(Feature);
  public mealTypes = Object.keys(MealType);
  public groupSizes = [1, 2, 3, 4, 5];
  public budgets = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  public recipe: IRecipe = {
    recipe_id: 0,
    name: '', 
    member_id: 1, 
    date: new Date(),
    steps: [{ step: '' }],
    ingredients: [{ name: '', unit: '', count: 0 }],
    group: 0,
    cost: 0,
    unit_cost: 0,
    photo: '',
    likes: 0,
    meal_type: MealType.None,
    cuisine_type: Cuisine.None,
    feature_type: Feature.None,
    restrictions: [FoodAllergy.None],
    recipe_tags: [RecipeTag.None]
  };

  public imagePath: string ="";
  public imgURL: any = "";
  public isUpdate: boolean;

  constructor(public recipeService: RecipeService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.isUpdate = this.route.snapshot.data.isUpdate;

    if (this.isUpdate) {
      this.route.params.subscribe((value) => {
        this.getRecipeContent(value.recipeId);
      })
    }
  }

  preview(files: any) {
    if (files.length === 0)
      return;
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }

  oneFileChanged(fileInput: any) {
    if (fileInput.target.files && fileInput.target.files[0] && fileInput.target.files[0].size < 20971520) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
          const image = new Image();
          image.src = e.target.result;
          image.onload = rs => {

          const imgBase64Path = e.target.result;
          this.recipe.photo = imgBase64Path              
          };
      };

      reader.readAsDataURL(fileInput.target.files[0]);
    }

  }

  createRecipe(){
    this.recipe.date = new Date();
    this.recipe.unit_cost = Math.ceil(this.recipe.cost / this.recipe.group);

    var rxjsData = this.recipeService.postNewRecipe(this.recipe);
    rxjsData.subscribe((data) => {
      console.log(data);
      alert("Success!");
    }) 
  }

  updateRecipe(){
    this.recipe.date = new Date();
    this.recipe.unit_cost = Math.ceil(this.recipe.cost / this.recipe.group);

    var rxjsData = this.recipeService.updateOneRecipe(this.recipe);
    rxjsData.subscribe((data) => {
      console.log(data);
      alert("Success!");
    }) 
  }

  addStep() {
    this.recipe.steps.push({ step: '' });
  }
  
  removeStep(i: number) {
    this.recipe.steps.splice(i, 1);
  }

  addItem() {
    this.recipe.ingredients.push({ name: '', unit: '', count: 0 });
  }
  
  removeItem(i: number) {
    this.recipe.ingredients.splice(i, 1);
  }

  getRecipeContent(recipeId: string) {
    var rxjsData = this.recipeService.getRecipeByID(recipeId);
    rxjsData.subscribe((data) => {
      this.recipe = <IRecipe>data;
    })    
  }
}
