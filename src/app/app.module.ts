import {FacebookModule, FacebookService, InitParams} from 'ngx-facebook'
import {NgFacebookService} from './services/Ng-FacebookService'

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import {SharedModule} from './shared.module'

import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {ChatComponent} from './components/chat/chat.component';

import {ChatModule} from "./components/chat/chat.module";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'chat',
        children: [
            {
                path: '',
                component: ChatComponent
            }
        ]
    }
];

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        ChatComponent,
    ],
    imports: [
        SharedModule,
        FacebookModule.forRoot(),

        ChatModule,
        RouterModule.forRoot(routes)

    ],
    exports: [],
    providers: [
        FacebookService,
        NgFacebookService

    ],
    bootstrap: [AppComponent]
})
export class AppModule {

    constructor() {

    }
}
