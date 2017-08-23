import {NgModule} from '@angular/core'

import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms"

@NgModule({
    exports: [
        BrowserModule,
        CommonModule,
        FormsModule
    ]
})
export class SharedModule {

}