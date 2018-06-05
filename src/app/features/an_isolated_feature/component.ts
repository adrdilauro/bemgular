import { Component } from '@angular/core';
import { BEMGULAR_BLOCK_TOKEN, BEMGULAR_MODIFIERS_TOKEN } from './../../services';

@Component({
  selector: 'app-an-isolated-feature',
  templateUrl: './component.html',
  styleUrls: [ './component.scss' ],
  providers: [
    { provide: BEMGULAR_BLOCK_TOKEN, useValue: 'an-isolated-feature' },
    { provide: BEMGULAR_MODIFIERS_TOKEN, useValue: [] },
  ],
})
export class AnIsolatedFeatureComponent {}
