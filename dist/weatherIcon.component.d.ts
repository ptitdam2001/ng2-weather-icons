import { OnInit, OnChanges } from '@angular/core';
import { WeatherNameToIconPipe } from './weather-name-to-icon.pipe';
export declare class WeatherIconComponent implements OnInit, OnChanges {
    private pipe;
    private cClass;
    private cStyle;
    name: string;
    size?: number;
    mode?: string;
    constructor(pipe: WeatherNameToIconPipe);
    ngOnInit(): void;
    ngOnChanges(changes: any): void;
}
