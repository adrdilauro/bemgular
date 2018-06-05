import { NgModule } from '@angular/core';
import { LazyLoadedTwoRouting } from './routing';
import { LazyLoadedTwoStandardComponent } from './standard';
import { LazyLoadedTwoVariationComponent } from './variation';
import { BEMGULAR_BLOCK } from './../modules/bemgular/tokens';

@NgModule({
  imports: [
    LazyLoadedTwoRouting,
  ],
  declarations: [
    LazyLoadedTwoStandardComponent,
    LazyLoadedTwoVariationComponent,
  ],
  providers: [
    { provide: BEMGULAR_BLOCK, useValue: 'lazy-loaded-two' },
  ],
})
export class LazyLoadedTwoModule {}
