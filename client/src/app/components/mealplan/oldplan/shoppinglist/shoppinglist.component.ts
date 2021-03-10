import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealplanService } from '../../../../services/mealplan.service';
import { IIngredientList } from '../../../../interfaces/iingredientlist'

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {

  public ingredient_list: IIngredientList[];

  public mealplanId: string;

  constructor(public recipeService: MealplanService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.mealplanId = this.route.snapshot.params['mealplanId'];
    this.getShoppingList();
  }

  getShoppingList() {
    var rxjsData = this.recipeService.getShoppingListByMealplanID(this.mealplanId);
    rxjsData.subscribe((data: any) => {
      this.ingredient_list = <IIngredientList[]>(data.shopping_list);
    })
  }

}
