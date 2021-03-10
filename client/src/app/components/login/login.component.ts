import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IAuth } from 'src/app/interfaces/auth';
import { SimpleResponse } from 'src/app/interfaces/ISimpleResponse';
import { LoginService } from '../../services/login.service'
import { ShareDataService } from '../../services/share-data.service'
import { HeaderBaseComponent } from '../header-base/header-base.component'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

/**
 * This service send login request to backend and calls for storeage service
 * storage service is exposed for other component to use
 */
export class LoginComponent implements OnInit {

  @Input()
  auth: IAuth = {
    name: "test username",
    password: "test password"
  };
  isLoggedIn: boolean;

  constructor(private login_service: LoginService,
              private shared_service: ShareDataService) {
                this.isLoggedIn = this.shared_service.getData('isLoggedIn');
              }

  ngOnInit(): void {
  }

  login():void{

    //login needs to get a full user object back and store it in the local cache
    this.login_service.login(this.auth).subscribe(
      res => {

        if(res.ret_code == 0){
          this.shared_service.setData("userid", res.userid);
          this.shared_service.setData("isLoggedIn", true);
          
          console.log(res.ret_msg);
          this.isLoggedIn = true;
          this.login_service.changeLoginStatus(true);
          HeaderBaseComponent.setLoginStatus(true);
          alert("Logged in Successfully");

        }
        else{
          alert(res.ret_msg);

        }
        
      }

    );
  }

  logOut():void{
    this.login_service.logOut();
    console.log("User logged out, states cleared");
    this.isLoggedIn = false;
    HeaderBaseComponent.setLoginStatus(false);
    alert("Logged out successfully.")
  }

}
