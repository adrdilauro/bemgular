import { NgModule } from '@angular/core';
import { LazyLoadedOneRouting } from './routing';
import { LazyLoadedOneEditComponent } from './edit';
import { LazyLoadedOneNewComponent } from './new';
import { AFeatureModule } from './../features';
import { AnIsolatedFeatureModule } from './../features';
import { SharedModule } from './../shared.module';
import { BEMGULAR } from './../modules/bemgular/token';

@NgModule({
  imports: [
    LazyLoadedOneRouting,
    SharedModule,
    AFeatureModule,
    AnIsolatedFeatureModule,
  ],
  declarations: [
    LazyLoadedOneEditComponent,
    LazyLoadedOneNewComponent,
  ],
  providers: [
    { provide: BEMGULAR, useValue: { block: 'lazy-loaded-one' } },
  ],
})
export class LazyLoadedOneModule {}
