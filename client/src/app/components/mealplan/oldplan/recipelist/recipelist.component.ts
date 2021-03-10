import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealplanService } from '../../../../services/mealplan.service';
import { IRecipe } from '../../../../interfaces/irecipe'

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {

  public myrecipes: any[];

  public mealplanId: string;

  constructor(public recipeService: MealplanService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.mealplanId = this.route.snapshot.params['mealplanId'];
    this.getRecipeList();

  }

  getRecipeList() {
    var rxjsData = this.recipeService.getRecipeListByMealplanID(this.mealplanId);
    rxjsData.subscribe((data) => {
      console.log(data);
      this.myrecipes = <any[]>data;
    })
  }

}
