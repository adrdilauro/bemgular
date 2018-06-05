import { Component } from '@angular/core';
import { BEMGULAR_MODIFIERS_TOKEN } from './../../modules/bemgular/tokens';

@Component({
  selector: 'app-lazy-loaded-two-new',
  templateUrl: './component.html',
  styleUrls: [ './../styles.scss' ],
  providers: [
    { provide: BEMGULAR_MODIFIERS_TOKEN, useValue: [ 'new' ] },
  ],
})
export class LazyLoadedTwoNewComponent {}
