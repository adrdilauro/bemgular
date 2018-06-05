import { Component } from '@angular/core';
import { BEM_BLOCK_TOKEN, BEM_MODIFIERS_TOKEN } from './../../modules/bemgular/tokens';

@Component({
  selector: 'app-a-feature',
  templateUrl: './component.html',
  styleUrls: [ './component.scss' ],
  providers: [
    { provide: BEM_BLOCK_TOKEN, useValue: 'a-feature' },
    { provide: BEM_MODIFIERS_TOKEN, useValue: [] },
  ],
})
export class AFeatureComponent {
}
