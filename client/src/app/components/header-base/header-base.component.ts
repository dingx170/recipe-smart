import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header-base',
  templateUrl: './header-base.component.html',
  styleUrls: ['./header-base.component.css']
})
export class HeaderBaseComponent implements OnInit {

  public isLoggedIn: boolean = false;
  //test :boolean = false;




  constructor(private loginService: LoginService) { 
    this.loginService.loginStatusChange.subscribe(value=>{
      this.isLoggedIn = value;
    });
  }

  ngOnInit(): void {

  }

  static setLoginStatus(loginStatus: boolean) {
    //this.isLoggedIn = loginStatus;
  }


}
