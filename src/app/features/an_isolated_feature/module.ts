import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared.module';
import { AnIsolatedFeatureComponent } from './component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    AnIsolatedFeatureComponent,
  ],
  exports: [
    AnIsolatedFeatureComponent,
  ],
})
export class AnIsolatedFeatureModule {}
