import { Directive, ElementRef, Inject, Input, OnInit } from '@angular/core';
import { BEMGULAR_BLOCK_TOKEN, BEMGULAR_MODIFIERS_TOKEN } from './tokens';

@Directive({
  selector: '[bem]'
})
export class BemgularDirective {
  private _block: string = 'block';
  private _blockModifiers: string[] = [];
  private _value: string = '';

  constructor(
    @Inject(BEMGULAR_BLOCK_TOKEN) block: string,
    @Inject(BEMGULAR_MODIFIERS_TOKEN) blockModifiers: string[],
    private _elRef: ElementRef,
  ) {
    this._block = block;
    this._blockModifiers = blockModifiers;
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
