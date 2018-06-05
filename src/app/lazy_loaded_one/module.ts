import { NgModule } from '@angular/core';
import { LazyLoadedOneRouting } from './routing';
import { LazyLoadedOneEditComponent } from './edit';
import { LazyLoadedOneNewComponent } from './new';
import { BEMGULAR_BLOCK } from './../modules/bemgular/tokens';

@NgModule({
  imports: [
    LazyLoadedOneRouting,
  ],
  declarations: [
    LazyLoadedOneEditComponent,
    LazyLoadedOneNewComponent,
  ],
  providers: [
    { provide: BEMGULAR_BLOCK, useValue: 'lazy-loaded-one' },
  ],
})
export class LazyLoadedOneModule {}
