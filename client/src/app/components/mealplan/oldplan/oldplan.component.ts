import { Component, OnInit } from '@angular/core';
import { IMealplan } from 'src/app/interfaces/imealplan';

import { MealplanService } from '../../../services/mealplan.service';

@Component({
  selector: 'app-oldplan',
  templateUrl: './oldplan.component.html',
  styleUrls: ['./oldplan.component.css']
})
export class OldplanComponent implements OnInit {

  public mealplans: IMealplan[] = [];
  constructor(
    public mealplan:MealplanService
    ) {
      this.mealplan.getAllMealPlansForUser()
      .subscribe((result)=>{
        console.log(result);
        this.mealplans = <IMealplan[]>result;
        console.log(this.mealplans);
      })
     }


  ngOnInit(): void {}

}
