import { NgModule, ModuleWithProviders } from '@angular/core';
import { BemgularDirective } from './directive';
import { BEMGULAR_BLOCK, BEMGULAR_MODIFIERS } from './tokens';

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
        { provide: BEMGULAR_BLOCK, useValue: 'block' },
        { provide: BEMGULAR_MODIFIERS, useValue: [] }
      ],
    }
  }
}
