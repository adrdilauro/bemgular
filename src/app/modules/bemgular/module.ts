import { NgModule } from '@angular/core';
import { BemgularDirective } from './directive';

@NgModule({
  declarations: [
    BemgularDirective,
  ],
  exports: [
    BemgularDirective,
  ],
})
export class BemgularModule {}
