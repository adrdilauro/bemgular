import { Component } from '@angular/core';
import { BEMGULAR_BLOCK, BEMGULAR_FEATURE } from './../../modules/bemgular/tokens';

@Component({
  selector: 'app-a-feature',
  templateUrl: './component.html',
  styleUrls: [ './component.css' ],
  providers: [
    { provide: BEMGULAR_BLOCK, useValue: 'a-feature' },
    { provide: BEMGULAR_FEATURE, useValue: true },
  ],
})
export class AFeatureComponent {}
