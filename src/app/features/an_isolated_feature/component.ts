import { Component } from '@angular/core';
import { BEMGULAR_BLOCK, BEMGULAR_MODIFIERS } from './../../modules/bemgular/tokens';

@Component({
  selector: 'app-an-isolated-feature',
  templateUrl: './component.html',
  styleUrls: [ './component.css' ],
  providers: [
    { provide: BEMGULAR_BLOCK, useValue: 'an-isolated-feature' },
    { provide: BEMGULAR_MODIFIERS, useValue: [] },
  ],
})
export class AnIsolatedFeatureComponent {}
