import { Directive, ElementRef, Inject, Input, OnInit, Injector, SkipSelf } from '@angular/core';
import { BEMGULAR_BLOCK, BEMGULAR_MODIFIERS } from './tokens';

@Directive({
  selector: '[bem]',
})
export class BemgularDirective implements OnInit {
  private _EMPTY_STRING: string = '';
  private _block: string;
  private _modifiers: string[];
  private _parentBlock: string;
  private _parentModifiers: string[];
  private _value: string = '';

  constructor(
    @Inject(Injector) private _injector: Injector,
    @SkipSelf() private _parentInjector: Injector,
    private _elRef: ElementRef
  ) {
    this._block = this._injector.get(BEMGULAR_BLOCK, this._EMPTY_STRING);
    this._modifiers = this._injector.get(BEMGULAR_MODIFIERS, []);
    this._parentBlock = this._parentInjector.get(BEMGULAR_BLOCK, this._EMPTY_STRING);
    this._parentModifiers = this._parentInjector.get(BEMGULAR_MODIFIERS, []);
  }

  @Input('bem')
  set storeElementAndModifiers(value: string) {
    if (value === this._EMPTY_STRING) {
      return;
    }
    let split = value.split(',');
    let element: string = (!!split[0]) ? split[0].trim() : this._EMPTY_STRING;
    let elementModifiers: string[] = split.slice(1).map(modifier => modifier.trim());
    if (this._block !== this._parentBlock) {
      this._block = this._parentBlock;
      this._modifiers = this._parentModifiers;
    }
    if (this._block === this._EMPTY_STRING) {
      return
    }
    this._value = this.bemBlockArray(this._block, this._modifiers).map(blockWithModifiers => {
      return this.bemBlockArray(element, elementModifiers).map(elementWithModifiers => {
        return blockWithModifiers + '__' + elementWithModifiers;
      }).join(' ');
    }).join(' ');
  }

  ngOnInit() {
    this._elRef.nativeElement.className = this._value.trim();
  }

  private bemBlockArray(block: string, modifiers: string[]): string[] {
    return [ block ].concat(modifiers.map(modifier => {
      return block + '--' + modifier;
    }));
  }
}
