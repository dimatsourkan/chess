import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { CoreModule } from './core-module/core.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports : [
    CommonModule,
    BrowserModule,
    FormsModule,
    CoreModule
  ],

  declarations : [
    AppComponent
  ],

  exports : [
    AppComponent
  ],

  providers : [],

  bootstrap : [
    AppComponent
  ]
})

export class AppModule {

  constructor() {

  }
}