import { Component, Input, OnInit } from '@angular/core';
import { UserService} from '../../services/user.service'
import { ShareDataService} from '../../services/share-data.service'
import { IUser } from 'src/app/interfaces/IUser';
import { FoodAllergy } from 'src/app/enums/food-allergy.enum';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @Input()
  new_user: IUser = {
    name: "",
    password: "",
    email: "",
    restrictions: [FoodAllergy.None],

  };;

  validEmailandName: boolean = false;
  signup_failure: boolean = false;

  constructor(
    private user_service: UserService,
    private share_service: ShareDataService
  ) { }

  ngOnInit(): void {
    this.validEmailandName = true;
    this.signup_failure= false;
  }

  signUp(): void{
    console.log("sign method called")
    this.user_service.validateNameEmail(this.new_user.email, this.new_user.name)
    .subscribe(firstRes =>{
      if(!firstRes){

        this.user_service.addUser(this.new_user).subscribe(secondRes => {
          if(secondRes.ret_code){
            // jump to sign up successful component
            this.share_service.setData("userid", secondRes.userid);
            this.share_service.setData("userObj", secondRes.user_obj);
          }
          else{
            // display error banner on top and prompt user try again
            this.signup_failure = true;
          }
        })
      }

      else{
        this.validEmailandName = false;
      }

    });

  }

}
