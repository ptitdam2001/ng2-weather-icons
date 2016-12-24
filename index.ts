import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherIconComponent } from './src/weatherIcon.component';
import { WeatherNameToIconPipe } from './src/weather-name-to-icon.pipe';

export * from './src/weatherIcon.component';
export * from './src/weather-name-to-icon.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    WeatherIconComponent,
    WeatherNameToIconPipe
  ],
  exports: [
    WeatherIconComponent
  ],
  providers: [
    WeatherNameToIconPipe
  ]
})
export default class Ng2WeatherIconsModule {}
