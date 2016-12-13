import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WeatherIconComponent} from './src/weatherIcon.component';

export * from './src/weatherIcon.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    WeatherIconComponent
  ],
  exports: [
    WeatherIconComponent
  ]
})
export default class Ng2WeatherIconsModule {}
