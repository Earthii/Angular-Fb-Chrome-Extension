import {FacebookService, LoginOptions, LoginResponse, LoginStatus, InitParams} from 'ngx-facebook'

import { Injectable } from '@angular/core'
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";

type ApiMethod = 'get' | 'post' | 'delete';

@Injectable()
export class NgFacebookService{

    private accessToken : string;

    constructor(private router:Router, private fb:FacebookService){
        let initParams: InitParams = {
            appId: environment.appId,
            xfbml: true,
            version: 'v2.8',
            cookie: true
        };

        this.fb.init(initParams).then(()=>{
            console.log("Done initializing fb sdk")
        });
        this.fb.getLoginStatus().then(()=>console.log("hello world"));

    }

    getLoginStatus() : Promise<string>{
        return this.fb.getLoginStatus().then((res : LoginStatus) =>{
            return res.status;

        })
    }

    getAccessToken() : string{
        return this.accessToken;
    }

    getAuthResponse(){
        return this.fb.getAuthResponse();
    }

    callApi(path: string, method?: ApiMethod, params?: any){

        this.fb.api(path, method, params)
            .then(res => console.log(res))
            .catch(e => console.log(e));
    }

    login() :void{
        const options: LoginOptions = {
            scope: 'public_profile,user_friends,email,pages_show_list',
            return_scopes: true,
            enable_profile_selector: true
        };

        this.fb.login(options)
            .then((response : LoginResponse) => {
                this.accessToken = response.authResponse.accessToken;
                this.router.navigate(['/chat'])

            }).catch((error : any) => console.log(error));
    }

    logout() : void {
        this.fb.logout().then(() => console.log('Logged out!'));
    }
}