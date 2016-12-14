import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WeatherIconComponent} from './dist/src/weatherIcon.component';

export * from './dist/src/weatherIcon.component'

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
