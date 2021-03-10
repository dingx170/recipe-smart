import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { IRecipe } from '../interfaces/irecipe';
import { ShareDataService } from './share-data.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  hostUrl: string = 'http://localhost:8080/';
  userId: string;
  
  constructor(public http: HttpClient, public shareDataService: ShareDataService) { }

  getAllRecipes() {
    return new Observable((observer) => {
      this.http.get<IRecipe[]>(this.hostUrl + 'recipes').subscribe((res:any) => {
        observer.next(res);
      });
    })
  }

  getRecipeByID(recipeId: string) {
    return new Observable((observer) => {
      this.http.get<IRecipe>(this.hostUrl + 'recipes/' + recipeId).subscribe((res:any) => {
        observer.next(res);
      });
    })
  }

  getRecipesByMemberID() {
    this.userId = this.shareDataService.getData('userid');

    return new Observable((observer) => {
      this.http.get<IRecipe[]>(this.hostUrl + 'myrecipes/' + this.userId).subscribe((res:any) => {
        observer.next(res);
      });
    })
  }

  getRecipesByFilter(filter: any) {
    return new Observable((observer) => {
      this.http.get<IRecipe[]>(this.hostUrl + 'recipes', {params: filter}).subscribe((res:any) => {
        observer.next(res);
      });
    })
  }

  postNewRecipe(recipe: any) {
    const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

    return new Observable((observer) => {
      this.userId = this.shareDataService.getData('userid');
      recipe.member_id = this.userId;
      this.http.post(this.hostUrl + 'myrecipes/' + this.userId, recipe, httpOptions).subscribe((res) => {
        observer.next(res);
      });
    })
  }

  updateOneRecipe(recipe: any) {
    const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

    return new Observable((observer) => {
      this.userId = this.shareDataService.getData('userid');
      this.http.put(this.hostUrl + 'myrecipes/' + this.userId + '/' + recipe.recipe_id, recipe, httpOptions).subscribe((res) => {
        observer.next(res);
      });
    })
  }
}
