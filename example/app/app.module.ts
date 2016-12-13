import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { Ng2WeatherIconsModule } from 'ng2-weather-icons';

@NgModule({
  imports:      [ BrowserModule, Ng2WeatherIconsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
