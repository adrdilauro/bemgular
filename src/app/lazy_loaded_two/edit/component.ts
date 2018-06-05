import { Component } from '@angular/core';
import { BEM_MODIFIERS_TOKEN } from './../../modules/bemgular/tokens';

@Component({
  selector: 'app-lazy-loaded-one-edit',
  templateUrl: './component.html',
  styleUrls: [ './../styles.scss' ],
  providers: [
    { provide: BEM_MODIFIERS_TOKEN, useValue: [ 'edit' ] },
  ],
})
export class LazyLoadedOneEditComponent {}
