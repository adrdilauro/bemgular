import { NgModule } from '@angular/core';
import { BemgularDirective } from './directive';
import { BEMGULAR } from './token';

@NgModule({
  declarations: [
    BemgularDirective,
  ],
  exports: [
    BemgularDirective,
  ],
})
export class BemgularModule {}
