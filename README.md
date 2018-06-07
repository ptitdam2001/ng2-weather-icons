Angular 2+ Component for weather-icons by Erik Flowers.

Installation
------------

To install this library, run:

```bash
$ npm install ng2-weather-icons --save
```

Or In package.json, insert following lines in the dependencies block:

```json
"dependencies": {
  ...
  "ng2-weather-icons": "~0.2.2",
  "weather-icons": "github:erikflowers/weather-icons"
}
```

We can import this library using SystemJS (`systemjs.config.js`\):

```javascript
// This example is following to Angular2 Quick Start Documentation

(function (global) {
  System.config({
    paths: {
      'npm:': 'node_modules/'
    },
    map: {
      app: 'app',

      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',

      'rxjs': 'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api',

      // Add this line (1/2)
      'ng2-weather-icons': 'node_modules/ng2-weather-icons',
    },
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'angular-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
      },

      // Add this line (2/2)
      'ng2-weather-icons': { defaultExtension: 'js' }
    }
  });
})(this);

```

### [Angular CLI](https://github.com/angular/angular-cli)

1.	add `../node_modules/weather-icons/css/weather-icons.css` and `../node_modules/weather-icons/css/weather-icons-wind.css` to **style** block of *angular-cli.json*.

2.	add `../node_modules/weather-icons/fonts/*.+(otf|eot|svg|ttf|woff|woff2)` to **addons** block of *angular-cli.json*.

```json
/* angular-cli.json  */
{
  "apps": [
    {
      "styles": [
        "../node_modules/weather-icons/css/weather-icons.css"
        "../node_modules/weather-icons/css/weather-icons-wind.css"
      ]
    }
  ],
  "addons": [
    "../node_modules/weather-icons/fonts/*.+(otf|eot|svg|ttf|woff|woff2)"
  ]
}
```

**NOTE**: If you don't have *angular-cli.json*, your configuration would be something like bellow:

```javascript
// src/system-config.ts

const map: any = {
  // Add this line (1/2)
  'ng2-weather-icons': 'vendor/ng2-weather-icons'
};

/** User packages configuration. */
const packages: any = {
  // Add these lines (2/2)
  'ng2-weather-icons':{
    defaultExtension: 'js'
  }
};
```


Consuming the library
---------------------


You must import the `Ng2WeatherIconsModule` module into your Angular `AppModule`:

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

<!-- rendered -->
<ng2-wi>
  <i class="wi wi-windy"></i>
</ng2-wi>

<ng2-wi [name]="'windy'" [mode]="'day'"></ng2-wi>

<!-- rendered -->
<ng2-wi>
  <i class="wi wi-day-windy"></i>
</ng2-wi>

<ng2-wi [name]="'windy'" [mode]="'night'"></ng2-wi>

<!-- rendered -->
<ng2-wi>
  <i class="wi wi-night-windy"></i>
</ng2-wi>

<ng2-wi [name]="'windy'" [size]="'1'"></ng2-wi>

<!-- rendered -->
<ng2-wi>
  <i class="wi wi-windy" style="font-size: 20px"></i>
</ng2-wi>


<ng2-wi [name]="'windy'" [size]="'2'"></ng2-wi>

<!-- rendered -->
<ng2-wi>
  <i class="wi wi-windy" style="font-size: 40px"></i>
</ng2-wi>
```

Description
-----------

the \tag <ng2-wi\> takes below parameters:

-	[name] which is a string without 'wi-' prefix [see at erik flowers website](https://erikflowers.github.io/weather-icons/)
-	[mode] is an optional string parameters which can be 'day', 'night'. By default, it is a void string
-	[size] it is the size of icon, it start at 1 (= 20px). Each size level is a multiple of 20

Development
-----------

To generate all `*.js`, `*.js.map` and `*.d.ts` files:

```bash
$ npm run tsc
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

To do
-----

-	\[*] Add attribute 'size' for having different icon's sizes

License
-------

MIT © [Damien Suhard](ptitdam2001@gmail.com) 2017-2018
