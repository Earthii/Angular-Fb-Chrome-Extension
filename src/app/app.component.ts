import { Component } from '@angular/core';
import {FacebookService, InitParams, LoginStatus} from "ngx-facebook";
import {environment} from "../environments/environment";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.style.scss']
})
export class AppComponent {
  constructor(private fb: FacebookService, private router: Router){
    let initParams: InitParams = {
      appId: environment.appId,
      xfbml: true,
      version: 'v2.8',
      cookie: true
    };

    this.fb.init(initParams);

    this.fb.getLoginStatus().then((res : LoginStatus) =>{
      if(res.status == 'connected'){
        this.router.navigate(["/chat"]);
      }
    });
  }
}
