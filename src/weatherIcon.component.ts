import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { WeatherNameToIconPipe } from './weather-name-to-icon.pipe';

const BASEICONSIZE = 20;

@Component({
  // moduleId: module.id,
  selector: 'ng2-wi',
  template: `<i [ngClass]="cClass" [ngStyle]="cStyle"></i>`,
  styleUrls: [],
  providers: [/*WeatherNameToIconPipe*/]
})
export class WeatherIconComponent implements OnInit, OnChanges {

  private cClass: Array<string>;
  private cStyle: any;

  @Input() name: string;
  @Input() size ?: number = 1;
  @Input() mode ?: string = '';

  constructor(private pipe: WeatherNameToIconPipe) {}

  ngOnInit() {
  }

  ngOnChanges(changes: any) {
    if (changes.name.currentValue) {
      let code = (this.mode !== '' ? this.mode + '-' : '') + this.name;
      this.cClass = ['wi', this.pipe.transform(code) ];
    }

    this.cStyle = { 'style': ( this.size > 0 ? (BASEICONSIZE * this.size) : BASEICONSIZE ) + 'px' };
  }
}
