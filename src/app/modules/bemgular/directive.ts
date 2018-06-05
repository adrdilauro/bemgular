import { Directive, ElementRef, Inject, Input, OnInit } from '@angular/core';
import { BemgularConfig, BemgularInternalConfig } from './config';
import { BEMGULAR, BEMGULAR_INTERNAL } from './token';

@Directive({
  selector: '[bem]',
  providers: {
    { provide: BEMGULAR_INTERNAL, useValue: {} },
  },
})
export class BemgularDirective {
  private _config: BemgularInternalConfig;
  private _value: string = '';

  constructor(
    @Inject(BemgularService) private service: BemgularService,
    @Inject(BEMGULAR) private config: BemgularConfig,
    private _elRef: ElementRef,
  ) {
    this._config = this.service.extend(this.config);
  }

  @Input('bem')
  set storeElementAndModifiers(value: string) {
    let split = value.split(',');
    let element: string = split[0];
    let elementModifiers: string[] = split.slice(1).map(modifier => {
      return modifier.trim();
    });
    this._value = this.bemBlockArray(this._block, this._blockModifiers).map(blockWithModifiers => {
      return this.bemBlockArray(element, elementModifiers).map(elementWithModifiers => {
        return blockWithModifiers + '__' + elementWithModifiers;
      }).join(' ');
    }).join(' ');
  }

  ngOnInit() {
    this._elRef.nativeElement.className = this._value;
  }

  private bemBlockArray(block: string, modifiers: string[]): string[] {
    return [ block ].concat(modifiers.map(modifier => {
      return block + '--' + modifier;
    }));
  }
}
