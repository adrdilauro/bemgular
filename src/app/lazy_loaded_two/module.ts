import { NgModule } from '@angular/core';
import { LazyLoadedTwoRouting } from './routing';
import { LazyLoadedTwoStandardComponent } from './standard';
import { LazyLoadedTwoVariationComponent } from './variation';
import { AFeatureModule } from './../features';
import { AnIsolatedFeatureModule } from './../features';
import { SharedModule } from './../shared.module';
import { BEMGULAR } from './../modules/bemgular/token';

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
    { provide: BEMGULAR, useValue: { block: 'lazy-loaded-two' } },
  ],
})
export class LazyLoadedTwoModule {}
