import { NgModule } from '@angular/core';
import { LazyLoadedTwoRouting } from './routing';
import { LazyLoadedTwoStandardComponent } from './standard';
import { LazyLoadedTwoVariationComponent } from './variation';
import { AFeatureModule } from './../features';
import { AnIsolatedFeatureModule } from './../features';
import { SharedModule } from './../shared.module';
import { BEMGULAR_BLOCK } from './../modules/bemgular/tokens';

@NgModule({
  imports: [
    LazyLoadedTwoRouting,
    AFeatureModule,
    AnIsolatedFeatureModule,
    SharedModule,
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
