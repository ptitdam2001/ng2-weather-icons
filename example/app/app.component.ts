import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div>
    <ng2-wi name="'sunny'"></ng2-wi>
    <br/>
    <ng2-wi name="'sunny'" size="2"></ng2-wi>
  </div>
  `,
})
export class AppComponent  { name = 'Angular'; }
