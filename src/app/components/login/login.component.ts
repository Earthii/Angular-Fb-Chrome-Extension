import {Component, OnInit} from '@angular/core'

import {NgFacebookService} from "../../services/Ng-FacebookService";
import {Router} from "@angular/router";

@Component({
    selector:'login-component',
    styleUrls :['./login.style.scss'],
    templateUrl :'./login.template.html'
})
export class LoginComponent implements OnInit{

    constructor(private ngFb:NgFacebookService, private router:Router){

    }

    handleLogin() : void{
        this.ngFb.login();

    }

    handleLogout() : void{
        this.ngFb.logout();
    }

    ngOnInit(){

    }
}