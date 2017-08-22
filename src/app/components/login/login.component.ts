import { Component } from '@angular/core'
import { Router } from '@angular/router';
import { FacebookService, LoginResponse } from 'ngx-facebook'

@Component({
    selector:'login-component',
    styleUrls :['./login.style.scss'],
    templateUrl :'./login.template.html'
})
export class LoginComponent{

    constructor(private router:Router, private fb:FacebookService){

    }

    handleLogin() : void{
        this.fb.login().then((response : LoginResponse) => console.log(response))
            .catch((error : any) => console.log(error));
        // this.router.navigate(['/chat'])
    }
}