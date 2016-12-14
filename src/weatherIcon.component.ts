
import { Component, Input, OnInit } from '@angular/core';

import './css/weather-icons.min.css';
import './css/weather-icons-wind.min.css';

@Component({
  // moduleId: module.id,
  selector: 'ng2-wi',
  template: `<i [ngClass]="cClass"></i>`,
  styleUrls: [
    './css/weather-icons.min.css',
    './css/weather-icons-wind.min.css'
  ]
})
export class WeatherIconComponent implements OnInit {

  private cClass: Array<string>;

  @Input() name: string;
  @Input() size ?: number = 1;
  @Input() mode ?: string = '';

  constructor() {}

  ngOnInit() {

    this.cClass = ['wi', 'wi' + (this.mode !== '' ? '-' + this.mode : '') + '-' + this.name ];
  }

}
