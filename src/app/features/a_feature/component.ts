import { Component } from '@angular/core';
import { BEMGULAR_BLOCK_TOKEN, BEMGULAR_MODIFIERS_TOKEN } from './../../modules/bemgular/tokens';

@Component({
  selector: 'app-a-feature',
  templateUrl: './component.html',
  styleUrls: [ './component.scss' ],
  providers: [
    { provide: BEMGULAR_BLOCK_TOKEN, useValue: 'a-feature' },
  ],
})
export class AFeatureComponent {}
