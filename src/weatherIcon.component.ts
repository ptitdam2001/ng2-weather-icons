import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { WeatherNameToIconPipe } from './weather-name-to-icon.pipe';

const BASEICONSIZE = 20;

@Component({
  selector: 'ng2-wi',
  template: '<i [ngClass]="cClass" [ngStyle]="cStyle"></i>'
})
export class WeatherIconComponent implements OnInit, OnChanges {

  private cClass: Array<string> = [];
  private cStyle: any;

  @Input() name: string;
  @Input() size ?= 1;
  @Input() mode ?= '';

  constructor(private pipe: WeatherNameToIconPipe) {}

  ngOnInit() {
  }

  ngOnChanges(changes: any) {
    if (changes.name.currentValue) {
      let code = (this.mode !== '' ? this.mode + '-' : '') + this.name;
      code =  this.pipe.transform(code);

      if (code) {
        this.cClass = ['wi', code];
      }
    }

    this.cStyle = { 'font-size': ( this.size > 0 ? (BASEICONSIZE * this.size) : BASEICONSIZE ) + 'px' };
  }
}
