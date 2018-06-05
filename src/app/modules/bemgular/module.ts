import { NgModule, ModuleWithProviders } from '@angular/core';
import { BemgularDirective } from './directive';
import { BemgularService } from './service';
import { BEMGULAR } from './token';

@NgModule({
  declarations: [
    BemgularDirective,
  ],
  exports: [
    BemgularDirective,
  ],
})
export class BemgularModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BemgularModule,
      providers: [
        BemgularService,
        { provide: BEMGULAR, useValue: {} },
      ],
    }
  }
}
