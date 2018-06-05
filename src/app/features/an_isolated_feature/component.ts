import { Component } from '@angular/core';
import { BEMGULAR_BLOCK, BEMGULAR_FEATURE, BEMGULAR_ISOLATED } from './../../modules/bemgular/tokens';

@Component({
  selector: 'app-an-isolated-feature',
  templateUrl: './component.html',
  styleUrls: [ './component.css' ],
  providers: [
    { provide: BEMGULAR_BLOCK, useValue: 'an-isolated-feature' },
    { provide: BEMGULAR_FEATURE, useValue: true },
    { provide: BEMGULAR_ISOLATED, useValue: true },
  ],
})
export class AnIsolatedFeatureComponent {}
