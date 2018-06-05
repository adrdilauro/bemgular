import { NgModule } from '@angular/core';
import { BemgularModule } from './modules/bemgular/module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BemgularModule,
    RouterModule,
  ],
  exports: [
    BemgularModule,
    RouterModule,
  ],
})
export class SharedModule {}
