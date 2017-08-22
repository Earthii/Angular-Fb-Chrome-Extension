import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ChatComponent } from './components/chat/chat.component';

import { FacebookModule, FacebookService, InitParams } from 'ngx-facebook'
import {ChatModule} from "./components/chat/chat.module";

const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path:'chat',
        children:[
            {
                path:'',
                component:ChatComponent
            }
        ]
    }
];

@NgModule({
  declarations: [
      AppComponent,
      LoginComponent,
      ChatComponent
  ],
  imports: [
      BrowserModule,
      FacebookModule,
      ChatModule,
      RouterModule.forRoot(routes)

  ],
  providers: [
      FacebookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit {

    constructor(private fb: FacebookService){
        let initParams: InitParams = {
            appId: '1906592549561770',
            xfbml:true,
            version:'v2.8'
        };

        fb.init(initParams)
    }

    ngOnInit(){

    }
}
