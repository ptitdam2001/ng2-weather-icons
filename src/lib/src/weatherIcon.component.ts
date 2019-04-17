import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { WeatherNameToIconPipe } from './weather-name-to-icon.pipe';

const BASEICONSIZE = 20;

@Component({
  selector: 'ng2-wi',
  template: `<i [ngClass]="cClass" [ngStyle]="cStyle"></i>`,
  providers: [WeatherNameToIconPipe],
  styleUrls: [
    '../node_modules/weathericons/css/weather-icons.min.css',
    '../node_modules/weathericons/css/weather-icons-wind.min.css'
  ]
})
export class WeatherIconComponent implements OnInit, OnChanges {

  cClass: Array<string> = [];
  cStyle: any;

  @Input() name: string;
  @Input() size ?= 1;
  @Input() mode ?= '';

  constructor(private pipe: WeatherNameToIconPipe) {}

  ngOnInit() {
  }

  ngOnChanges(changes: any) {
    if (changes.name.currentValue) {
      const nameNumber = Number(this.name) || 0;
      let code = (this.mode !== '' ? this.mode + '-' : '') + this.name;
      code = nameNumber > 0 ? this.pipe.transform(code) : 'wi-' + code;
      this.cClass = ['wi', code];
    }

    this.cStyle = { 'font-size': ( this.size > 0 ? (BASEICONSIZE * this.size) : BASEICONSIZE ) + 'px' };
  }
}
