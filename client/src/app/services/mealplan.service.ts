import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { IMealplan } from '../interfaces/imealplan';
import { IRecipe } from '../interfaces/irecipe';
import { FoodAllergy } from '../enums/food-allergy.enum'
import { ShareDataService } from './share-data.service';

@Injectable({
  providedIn: 'root'
})
export class MealplanService {
  hostUrl: string = 'http://localhost:8080/';
  userId: string;

  constructor(public http:HttpClient, public shareDataService: ShareDataService) { }



  getAllMealPlansForUser(){
    this.userId = this.shareDataService.getData('userid');
    return new Observable((observer) => {
      this.http.get<IMealplan[]>(this.hostUrl + 'mealplan/' + this.userId).subscribe((res:any) =>{
      observer.next(res);
      });

    })

  }
  getRecipesByFilter(filter:any){
    //const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
    console.log(filter);
    let params = new HttpParams();
    params = params.append('budget',filter.budget);
    params = params.append('group', filter.group);
    params = params.append('meal_type', filter.meal_type);
    params = params.append('cuisine_type', filter.cuisine_type);
    params = params.append('feature_type', filter.feature_type);
    filter.restrictions.forEach((element:any) => {
        params = params.append(`restrictions[]`, element);
    });
    this.userId = this.shareDataService.getData('userid');
    return new Observable((observer) => {
  
      this.http.get<IRecipe[]>(this.hostUrl + 'mealplan/' + this.userId + '/customization/getrecipelist', {params:params}).subscribe((res:any) => {
        observer.next(res);
      });
    })
  }
  postNewMealplan(mealplan:any){
    const httpOptions = {headers: new HttpHeaders({'content-Type': 'application/json' })};
    console.log(mealplan);
    this.userId = this.shareDataService.getData('userid');
    return new Observable((observer) => {
      this.http.post(this.hostUrl + `mealplan/${this.userId}/customization/`, mealplan, httpOptions).subscribe((res) =>{
        observer.next(res);
      });
    })
  }

  getRecipeListByMealplanID(mealplanId: string) {
    this.userId = this.shareDataService.getData('userid');
    return new Observable((observer) => {
      this.http.get<IRecipe[]>(this.hostUrl + 'mealplan/' + this.userId + '/plans/' + mealplanId + '/recipelist').subscribe((res:any) => {
        observer.next(res);
      });
    })
  }

  getShoppingListByMealplanID(mealplanId: string) {
    this.userId = this.shareDataService.getData('userid');
    return new Observable((observer) => {
      this.http.get<any[]>(this.hostUrl + 'mealplan/' + this.userId + '/plans/' + mealplanId + '/shoppinglist').subscribe((res:any) => {
        observer.next(res);
      });
    })
  }

}
