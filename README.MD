# ng2-weather-icons

## Installation

To install this library, run:

```bash
$ npm install ng2-weather-icons --save
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

```html
<!-- You can now use your library component in app.component.html -->
<ng2-wi [name]="'windy'"></ng2-wi>

<ng2-wi [name]="'windy'" [mode]="'day'"></ng2-wi>

<ng2-wi [name]="'windy'" [mode]="'night'"></ng2-wi>

```

## Description

the \tag <ng2-wi\> takes below parameters:

- [name] which is a string without 'wi-' prefix [see at erik flowers website](https://erikflowers.github.io/weather-icons/)
- [mode] is an optional string parameters which can be 'day', 'night'. By default, it is a void string

## Development

To generate all `*.js`, `*.js.map` and `*.d.ts` files:

```bash
$ npm run tsc
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## To do

- fix import of css into component
- Add attribute 'size' for having different icon's sizes

## License

MIT © [Damien Suhard](ptitdam2001@gmail.com)
