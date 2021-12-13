import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon'
import { FlexModule } from '@angular/flex-layout';

import { CommonModule } from '@angular/common';
import { ComponentModule } from './component/component.modules';



@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
    ComponentModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
