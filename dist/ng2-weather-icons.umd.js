(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('lodash.findkey')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', 'lodash.findkey'], factory) :
	(factory((global['ng2-weather-icons'] = global['ng2-weather-icons'] || {}),global._angular_core,global._angular_common,global.findKey));
}(this, (function (exports,_angular_core,_angular_common,findKey) { 'use strict';

findKey = 'default' in findKey ? findKey['default'] : findKey;

var OWMLIST = {
    'wi-owm-200': 'thunderstorm',
    'wi-owm-201': 'thunderstorm',
    'wi-owm-202': 'thunderstorm',
    'wi-owm-210': 'lightning',
    'wi-owm-211': 'lightning',
    'wi-owm-212': 'lightning',
    'wi-owm-221': 'lightning',
    'wi-owm-230': 'thunderstorm',
    'wi-owm-231': 'thunderstorm',
    'wi-owm-232': 'thunderstorm',
    'wi-owm-300': 'sprinkle',
    'wi-owm-301': 'sprinkle',
    'wi-owm-302': 'rain',
    'wi-owm-310': 'rain-mix',
    'wi-owm-311': 'rain',
    'wi-owm-312': 'rain',
    'wi-owm-313': 'showers',
    'wi-owm-314': 'rain',
    'wi-owm-321': 'sprinkle',
    'wi-owm-500': 'sprinkle',
    'wi-owm-501': 'rain',
    'wi-owm-502': 'rain',
    'wi-owm-503': 'rain',
    'wi-owm-504': 'rain',
    'wi-owm-511': 'rain-mix',
    'wi-owm-520': 'showers',
    'wi-owm-521': 'showers',
    'wi-owm-522': 'showers',
    'wi-owm-531': 'storm-showers',
    'wi-owm-600': 'snow',
    'wi-owm-601': 'snow',
    'wi-owm-602': 'sleet',
    'wi-owm-611': 'rain-mix',
    'wi-owm-612': 'rain-mix',
    'wi-owm-615': 'rain-mix',
    'wi-owm-616': 'rain-mix',
    'wi-owm-620': 'rain-mix',
    'wi-owm-621': 'snow',
    'wi-owm-622': 'snow',
    'wi-owm-701': 'showers',
    'wi-owm-711': 'smoke',
    'wi-owm-721': 'day-haze',
    'wi-owm-731': 'dust',
    'wi-owm-741': 'fog',
    'wi-owm-761': 'dust',
    'wi-owm-762': 'dust',
    'wi-owm-771': 'cloudy-gusts',
    'wi-owm-781': 'tornado',
    'wi-owm-800': 'day-sunny',
    'wi-owm-801': 'cloudy-gusts',
    'wi-owm-802': 'cloudy-gusts',
    'wi-owm-803': 'cloudy-gusts',
    'wi-owm-804': 'cloudy',
    'wi-owm-900': 'tornado',
    'wi-owm-901': 'storm-showers',
    'wi-owm-902': 'hurricane',
    'wi-owm-903': 'snowflake-cold',
    'wi-owm-904': 'hot',
    'wi-owm-905': 'windy',
    'wi-owm-906': 'hail',
    'wi-owm-957': 'strong-wind',
    'wi-owm-day-200': 'day-thunderstorm',
    'wi-owm-day-201': 'day-thunderstorm',
    'wi-owm-day-202': 'day-thunderstorm',
    'wi-owm-day-210': 'day-lightning',
    'wi-owm-day-211': 'day-lightning',
    'wi-owm-day-212': 'day-lightning',
    'wi-owm-day-221': 'day-lightning',
    'wi-owm-day-230': 'day-thunderstorm',
    'wi-owm-day-231': 'day-thunderstorm',
    'wi-owm-day-232': 'day-thunderstorm',
    'wi-owm-day-300': 'day-sprinkle',
    'wi-owm-day-301': 'day-sprinkle',
    'wi-owm-day-302': 'day-rain',
    'wi-owm-day-310': 'day-rain',
    'wi-owm-day-311': 'day-rain',
    'wi-owm-day-312': 'day-rain',
    'wi-owm-day-313': 'day-rain',
    'wi-owm-day-314': 'day-rain',
    'wi-owm-day-321': 'day-sprinkle',
    'wi-owm-day-500': 'day-sprinkle',
    'wi-owm-day-501': 'day-rain',
    'wi-owm-day-502': 'day-rain',
    'wi-owm-day-503': 'day-rain',
    'wi-owm-day-504': 'day-rain',
    'wi-owm-day-511': 'day-rain-mix',
    'wi-owm-day-520': 'day-showers',
    'wi-owm-day-521': 'day-showers',
    'wi-owm-day-522': 'day-showers',
    'wi-owm-day-531': 'day-storm-showers',
    'wi-owm-day-600': 'day-snow',
    'wi-owm-day-601': 'day-sleet',
    'wi-owm-day-602': 'day-snow',
    'wi-owm-day-611': 'day-rain-mix',
    'wi-owm-day-612': 'day-rain-mix',
    'wi-owm-day-615': 'day-rain-mix',
    'wi-owm-day-616': 'day-rain-mix',
    'wi-owm-day-620': 'day-rain-mix',
    'wi-owm-day-621': 'day-snow',
    'wi-owm-day-622': 'day-snow',
    'wi-owm-day-701': 'day-showers',
    'wi-owm-day-711': 'smoke',
    'wi-owm-day-721': 'day-haze',
    'wi-owm-day-731': 'dust',
    'wi-owm-day-741': 'day-fog',
    'wi-owm-day-761': 'dust',
    'wi-owm-day-762': 'dust',
    'wi-owm-day-781': 'tornado',
    'wi-owm-day-800': 'day-sunny',
    'wi-owm-day-801': 'day-cloudy-gusts',
    'wi-owm-day-802': 'day-cloudy-gusts',
    'wi-owm-day-803': 'day-cloudy-gusts',
    'wi-owm-day-804': 'day-sunny-overcast',
    'wi-owm-day-900': 'tornado',
    'wi-owm-day-902': 'hurricane',
    'wi-owm-day-903': 'snowflake-cold',
    'wi-owm-day-904': 'hot',
    'wi-owm-day-906': 'day-hail',
    'wi-owm-day-957': 'strong-wind',
    'wi-owm-night-200': 'night-alt-thunderstorm',
    'wi-owm-night-201': 'night-alt-thunderstorm',
    'wi-owm-night-202': 'night-alt-thunderstorm',
    'wi-owm-night-210': 'night-alt-lightning',
    'wi-owm-night-211': 'night-alt-lightning',
    'wi-owm-night-212': 'night-alt-lightning',
    'wi-owm-night-221': 'night-alt-lightning',
    'wi-owm-night-230': 'night-alt-thunderstorm',
    'wi-owm-night-231': 'night-alt-thunderstorm',
    'wi-owm-night-232': 'night-alt-thunderstorm',
    'wi-owm-night-300': 'night-alt-sprinkle',
    'wi-owm-night-301': 'night-alt-sprinkle',
    'wi-owm-night-302': 'night-alt-rain',
    'wi-owm-night-310': 'night-alt-rain',
    'wi-owm-night-311': 'night-alt-rain',
    'wi-owm-night-312': 'night-alt-rain',
    'wi-owm-night-313': 'night-alt-rain',
    'wi-owm-night-314': 'night-alt-rain',
    'wi-owm-night-321': 'night-alt-sprinkle',
    'wi-owm-night-500': 'night-alt-sprinkle',
    'wi-owm-night-501': 'night-alt-rain',
    'wi-owm-night-502': 'night-alt-rain',
    'wi-owm-night-503': 'night-alt-rain',
    'wi-owm-night-504': 'night-alt-rain',
    'wi-owm-night-511': 'night-alt-rain-mix',
    'wi-owm-night-520': 'night-alt-showers',
    'wi-owm-night-521': 'night-alt-showers',
    'wi-owm-night-522': 'night-alt-showers',
    'wi-owm-night-531': 'night-alt-storm-showers',
    'wi-owm-night-600': 'night-alt-snow',
    'wi-owm-night-601': 'night-alt-sleet',
    'wi-owm-night-602': 'night-alt-snow',
    'wi-owm-night-611': 'night-alt-rain-mix',
    'wi-owm-night-612': 'night-alt-rain-mix',
    'wi-owm-night-615': 'night-alt-rain-mix',
    'wi-owm-night-616': 'night-alt-rain-mix',
    'wi-owm-night-620': 'night-alt-rain-mix',
    'wi-owm-night-621': 'night-alt-snow',
    'wi-owm-night-622': 'night-alt-snow',
    'wi-owm-night-701': 'night-alt-showers',
    'wi-owm-night-711': 'smoke',
    'wi-owm-night-721': 'day-haze',
    'wi-owm-night-731': 'dust',
    'wi-owm-night-741': 'night-fog',
    'wi-owm-night-761': 'dust',
    'wi-owm-night-762': 'dust',
    'wi-owm-night-781': 'tornado',
    'wi-owm-night-800': 'night-clear',
    'wi-owm-night-801': 'night-alt-cloudy-gusts',
    'wi-owm-night-802': 'night-alt-cloudy-gusts',
    'wi-owm-night-803': 'night-alt-cloudy-gusts',
    'wi-owm-night-804': 'night-alt-cloudy',
    'wi-owm-night-900': 'tornado',
    'wi-owm-night-902': 'hurricane',
    'wi-owm-night-903': 'snowflake-cold',
    'wi-owm-night-904': 'hot',
    'wi-owm-night-906': 'night-alt-hail',
    'wi-owm-night-957': 'strong-wind'
};
var WeatherNameToIconPipe = (function () {
    function WeatherNameToIconPipe() {
    }
    /**
     * @param {?} id
     * @param {?=} args
     * @return {?}
     */
    WeatherNameToIconPipe.prototype.transform = function (id, args) {
        var /** @type {?} */ code = 'wi-owm-' + id;
        var /** @type {?} */ foundKey = findKey(OWMLIST, function (o) { return (o === id); });
        if (foundKey) {
            return foundKey;
        }
        else if (OWMLIST[code]) {
            return code;
        }
        return null;
    };
    return WeatherNameToIconPipe;
}());
WeatherNameToIconPipe.decorators = [
    { type: _angular_core.Pipe, args: [{
                name: 'weatherNameToIcon'
            },] },
];
/**
 * @nocollapse
 */
WeatherNameToIconPipe.ctorParameters = function () { return []; };

var BASEICONSIZE = 20;
var WeatherIconComponent = (function () {
    /**
     * @param {?} pipe
     */
    function WeatherIconComponent(pipe) {
        this.pipe = pipe;
        this.cClass = [];
        this.size = 1;
        this.mode = '';
    }
    /**
     * @return {?}
     */
    WeatherIconComponent.prototype.ngOnInit = function () {
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    WeatherIconComponent.prototype.ngOnChanges = function (changes) {
        if (changes.name.currentValue) {
            var /** @type {?} */ code = (this.mode !== '' ? this.mode + '-' : '') + this.name;
            code = this.pipe.transform(code);
            if (code) {
                this.cClass = ['wi', code];
            }
        }
        this.cStyle = { 'font-size': (this.size > 0 ? (BASEICONSIZE * this.size) : BASEICONSIZE) + 'px' };
    };
    return WeatherIconComponent;
}());
WeatherIconComponent.decorators = [
    { type: _angular_core.Component, args: [{
                //selector: 'ng2-wi',
                template: "<i [ngClass]=\"cClass\" [ngStyle]=\"cStyle\"></i>",
                styles: [],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
WeatherIconComponent.ctorParameters = function () { return [
    { type: WeatherNameToIconPipe, },
]; };
WeatherIconComponent.propDecorators = {
    'name': [{ type: _angular_core.Input },],
    'size': [{ type: _angular_core.Input },],
    'mode': [{ type: _angular_core.Input },],
};

var Ng2WeatherIconsModule = (function () {
    function Ng2WeatherIconsModule() {
    }
    /**
     * @return {?}
     */
    Ng2WeatherIconsModule.forRoot = function () {
        return {
            ngModule: Ng2WeatherIconsModule,
            providers: [WeatherNameToIconPipe]
        };
    };
    return Ng2WeatherIconsModule;
}());
Ng2WeatherIconsModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                imports: [
                    _angular_common.CommonModule
                ],
                declarations: [
                    WeatherIconComponent,
                    WeatherNameToIconPipe
                ],
                exports: [
                    WeatherIconComponent,
                    WeatherNameToIconPipe
                ]
            },] },
];
/**
 * @nocollapse
 */
Ng2WeatherIconsModule.ctorParameters = function () { return []; };

exports.Ng2WeatherIconsModule = Ng2WeatherIconsModule;
exports.WeatherIconComponent = WeatherIconComponent;
exports.OWMLIST = OWMLIST;
exports.WeatherNameToIconPipe = WeatherNameToIconPipe;

Object.defineProperty(exports, '__esModule', { value: true });

})));
