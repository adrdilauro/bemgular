import { Component } from '@angular/core';
import { BEMGULAR } from './../../modules/bemgular/token';

@Component({
  selector: 'app-an-isolated-feature',
  templateUrl: './component.html',
  styleUrls: [ './component.css' ],
  providers: [
    { provide: BEMGULAR, useValue: { block: 'an-isolated-feature', feature: true, isolated: true } },
  ],
})
export class AnIsolatedFeatureComponent {}
