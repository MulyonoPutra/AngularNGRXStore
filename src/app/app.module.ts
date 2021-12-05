import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/demo.reducer';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, StoreModule.forRoot({
      demoStore: reducer
    }) ],
  declarations: [ AppComponent, Component1Component, Component2Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
