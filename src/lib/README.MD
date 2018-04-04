# ng2-weather-icons

## Installation

To install this library, run:

```bash
$ npm install ng2-weather-icons --save
```

```bash
$ yarn add ng2-weather-icons
```
## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install ng2-weather-icons
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { Ng2WeatherIconsModule } from 'ng2-weather-icons';

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
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->
<h1>
  {{title}}
</h1>
<div style="background:grey;height:30px;">

  <ng2-wi [name]="'windy'"></ng2-wi>

  <ng2-wi [name]="900"></ng2-wi>
</div>

<!-- rendered -->
<!-- <ng2-wi>
  <i class="wi wi-windy"></i>
</ng2-wi> -->

<div style="background:grey;height:30px;">

  <ng2-wi [name]="'celsius'"></ng2-wi>
</div>

<div style="background:grey;height:30px;">
  <ng2-wi [name]="'windy'" [mode]="'day'"></ng2-wi>
</div>

<!-- rendered -->
<!-- <ng2-wi>
  <i class="wi wi-day-windy"></i>
</ng2-wi> -->
<div style="background:grey;height:30px;">
  <ng2-wi [name]="'cloudy'" [mode]="'night'"></ng2-wi>
</div>

<!-- rendered -->
<!-- <ng2-wi>
  <i class="wi wi-night-windy"></i>
</ng2-wi> -->

<div style="background:grey;height:30px;">
  <ng2-wi [name]="'windy'" [size]="'1'"></ng2-wi>
</div>

<!-- rendered -->
<!-- <ng2-wi>
  <i class="wi wi-windy" style="font-size: 20px"></i>
</ng2-wi> -->

<div style="background:grey;padding: 5px 3px;">
  <ng2-wi [name]="'windy'" [size]="'2'"></ng2-wi>
</div>

<!-- rendered -->
<!-- <ng2-wi>
  <i class="wi wi-windy" style="font-size: 40px"></i>
</ng2-wi> -->

<div style="background:grey;padding: 5px 3px;">
  <ng2-wi [name]="'windy'" [size]="'3'"></ng2-wi>
</div>

<div style="background:grey;padding: 5px 3px;">
  <ng2-wi [name]="'windy'" [size]="'4'"></ng2-wi>
</div>

<div style="background:grey;padding: 5px 3px;">
  <ng2-wi [name]="'windy'" [size]="'5'"></ng2-wi>
  <ng2-wi [name]="900" [size]="5"></ng2-wi>
</div>
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Damien Suhard](mailto:ptitdam2001@gmail.com)
