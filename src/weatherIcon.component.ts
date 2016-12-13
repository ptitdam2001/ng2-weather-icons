
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ng2-wi',
  template: `<i [ngClass]="cClass"></i>`,
  styleUrls: [
    '../../node_modules/weather-icons/css/weather-icons.css'
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
