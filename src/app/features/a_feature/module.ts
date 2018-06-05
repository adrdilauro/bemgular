import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared.module';
import { AFeatureComponent } from './component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    AFeatureComponent,
  ],
  exports: [
    AFeatureComponent,
  ],
})
export class AFeatureModule {}
