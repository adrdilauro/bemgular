import { Component } from '@angular/core';
import { BEMGULAR_BLOCK } from './../../modules/bemgular/tokens';

@Component({
  selector: 'app-a-feature',
  templateUrl: './component.html',
  styleUrls: [ './component.css' ],
  providers: [
    { provide: BEMGULAR_BLOCK, useValue: 'a-feature' },
  ],
})
export class AFeatureComponent {}
