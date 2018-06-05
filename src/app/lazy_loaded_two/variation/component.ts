import { Component } from '@angular/core';
import { BEMGULAR } from './../../modules/bemgular/token';

@Component({
  selector: 'app-lazy-loaded-two-variation',
  templateUrl: './component.html',
  styleUrls: [ './../styles.css' ],
  providers: [
    { provide: BEMGULAR, useValue: { modifiers: [ 'variation' ] } },
  ],
})
export class LazyLoadedTwoVariationComponent {}
