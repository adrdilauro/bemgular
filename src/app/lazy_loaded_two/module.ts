import { NgModule } from '@angular/core';
import { LazyLoadedTwoRouting } from './routing';
import { LazyLoadedTwoEditComponent } from './edit';
import { LazyLoadedTwoNewComponent } from './new';
import { BEMGULAR_BLOCK_TOKEN } from './../modules/bemgular/tokens';

@NgModule({
  imports: [
    LazyLoadedTwoRouting,
  ],
  declarations: [
    LazyLoadedTwoEditComponent,
    LazyLoadedTwoNewComponent,
  ],
  providers: [
    { provide: BEMGULAR_BLOCK_TOKEN, useValue: 'lazy-loaded-two' },
  ],
})
export class LazyLoadedTwoModule {}
