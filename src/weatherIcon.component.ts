import { Component, Input, OnInit } from '@angular/core';

const BASEICONSIZE = 20;

@Component({
  // moduleId: module.id,
  selector: 'ng2-wi',
  template: `<i [ngClass]="cClass" [ngStyle]="cStyle"></i>`,
  styleUrls: [
  ]
})
export class WeatherIconComponent implements OnInit {

  private cClass: Array<string>;
  private cStyle: any;

  @Input() name: string;
  @Input() size ?: number = 1;
  @Input() mode ?: string = '';

  constructor() {}

  ngOnInit() {

    if (this.size > 0) {
      this.cStyle = { 'style': (BASEICONSIZE * this.size) + 'px' };
    } else {
      this.cStyle = { 'style': BASEICONSIZE + 'px' };
    }

    this.cClass = ['wi', 'wi' + (this.mode !== '' ? '-' + this.mode : '') + '-' + this.name ];
  }
}
