import { Component, Input, OnInit } from '@angular/core';
import { FoodAllergy } from 'src/app/enums/food-allergy.enum';
import { IUser } from 'src/app/interfaces/IUser';
import { UserService} from '../../services/user.service'
import { ShareDataService} from '../../services/share-data.service'

@Component({
  selector: 'app-user-profiles',
  templateUrl: './user-profiles.component.html',
  styleUrls: ['./user-profiles.component.css']
})
export class UserProfilesComponent implements OnInit {

  @Input()
  user: IUser = {
    name: "pikachu",
    password: "pikachu",
    email: "pikachu@gmail.com",
    restrictions: [FoodAllergy.None]
  };

  private userid: number;
  public currUser: any;

  logged_in: boolean;
  updated_success: boolean = false;
  update_fail: boolean = false;

  allergy_list = Object.keys(FoodAllergy) as FoodAllergy[];

  constructor(
    private user_service: UserService,
    private share_service: ShareDataService,

  ){
      this.userid = this.share_service.getData("userid");
      console.log(this.userid);
      // this.currUser = this.share_service.getData("userObj");
      // console.log("user detail: " + this.currUser);

      if(this.userid){
        this.user_service.getUserById(this.userid).subscribe(res=>{

          console.log("res:" + JSON.stringify(res.user_obj));
          console.log("name: " + res.user_obj.name);
          if(res.ret_code){
            this.user = res.user_obj;
          }else{
            console.log("error");
          }
  
        });
      }
      
   }

  ngOnInit(): void {

    //every time initializing this component default logged in as false;
    this.updated_success = false;
    this.update_fail = false;

    if(this.userid == null){
      this.logged_in = false;
    }else{
      this.logged_in = true;
    }
  }
  /**
   * update user with the user object held within this component
   */
  update():void{
    if(this.userid){
      // response from the backend needs to be structured as loginRes
      this.user_service.updateUser(this.user, this.userid)
        .subscribe(res => {
            if(res.ret_code == 0){
              this.updated_success = true;
            }
            else if(res.ret_code == -1){
              this.update_fail = true;
            }

        });
    }

  }

}
