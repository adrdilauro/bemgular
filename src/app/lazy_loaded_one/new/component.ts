import { Component } from '@angular/core';
import { BEMGULAR } from './../../modules/bemgular/token';

@Component({
  selector: 'app-lazy-loaded-one-new',
  templateUrl: './component.html',
  styleUrls: [ './../styles.css' ],
  providers: [
    { provide: BEMGULAR, useValue: { modifiers: [ 'new' ] } },
  ],
})
export class LazyLoadedOneNewComponent {}
