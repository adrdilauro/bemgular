import { Component } from '@angular/core';
import { BEMGULAR_MODIFIERS } from './../../modules/bemgular/tokens';

@Component({
  selector: 'app-lazy-loaded-one-new',
  templateUrl: './component.html',
  styleUrls: [ './../styles.scss' ],
  providers: [
    { provide: BEMGULAR_MODIFIERS, useValue: [ 'new' ] },
  ],
})
export class LazyLoadedOneNewComponent {}
