import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherIconComponent } from './weatherIcon.component';
import { WeatherNameToIconPipe } from './weather-name-to-icon.pipe';

export * from './weatherIcon.component';
export * from './weather-name-to-icon.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    WeatherIconComponent,
    WeatherNameToIconPipe
  ],
  exports: [
    WeatherIconComponent,
    WeatherNameToIconPipe
  ]
})
export class Ng2WeatherIconsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: Ng2WeatherIconsModule,
      providers: [WeatherNameToIconPipe]
    };
  }
}
