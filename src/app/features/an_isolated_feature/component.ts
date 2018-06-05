import { Component } from '@angular/core';
import { BEM_BLOCK_TOKEN, BEM_MODIFIERS_TOKEN } from './../../services';

@Component({
  selector: 'app-an-isolated-feature',
  templateUrl: './component.html',
  styleUrls: [ './component.scss' ],
  providers: [
    { provide: BEM_BLOCK_TOKEN, useValue: 'an-isolated-feature' },
    { provide: BEM_MODIFIERS_TOKEN, useValue: [] },
  ],
})
export class AnIsolatedFeatureComponent {
}
