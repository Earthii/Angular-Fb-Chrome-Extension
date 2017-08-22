import { Component } from '@angular/core'
import { Router } from '@angular/router';

@Component({
    selector:'login-component',
    styleUrls :['./login.style.scss'],
    templateUrl :'./login.template.html'
})
export class LoginComponent{

    constructor(private router:Router){

    }
    handleLogin(){
        this.router.navigate(['/chat'])
    }
}