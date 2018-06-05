import { NgModule } from '@angular/core';
import { AnIsolatedFeatureComponent } from './component';

@NgModule({
  declarations: [
    AnIsolatedFeatureComponent,
  ],
  exports: [
    AnIsolatedFeatureComponent,
  ],
})
export class AnIsolatedFeatureModule {}
