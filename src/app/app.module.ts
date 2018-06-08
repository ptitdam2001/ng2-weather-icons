import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2WeatherIconsModule } from '../lib';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Ng2WeatherIconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
