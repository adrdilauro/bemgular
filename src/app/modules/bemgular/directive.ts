import { Directive, ElementRef, Inject, Input, OnInit, Injector, SkipSelf } from '@angular/core';
import { BEMGULAR_BLOCK, BEMGULAR_MODIFIERS } from './tokens';

@Directive({
  selector: '[bem]',
})
export class BemgularDirective implements OnInit {
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
    this._block = this._injector.get(BEMGULAR_BLOCK, '');
    this._modifiers = this._injector.get(BEMGULAR_MODIFIERS, []);
    this._parentBlock = this._parentInjector.get(BEMGULAR_BLOCK, '');
    this._parentModifiers = this._parentInjector.get(BEMGULAR_MODIFIERS, []);
  }

  @Input('bem')
  set storeElementAndModifiers(value: string) {
    let split = value.split(',');
    let element: string = (!!split[0]) ? split[0].trim() : 'block';
    let elementModifiers: string[] = split.slice(1).map(modifier => modifier.trim());
    if (this._block !== this._parentBlock) {
      let valueArray: string[] = [];
      if (this._parentBlock !== '') {
        valueArray.push(this.bemElement(this._parentBlock, this._parentModifiers, element, elementModifiers));
      }
      if (this._block !== '') {
        valueArray.push(this.bemBlockArray(this._block, this._modifiers).join(' '));
      }
      this._value = valueArray.join(' ');
    } else if (this._block !== '') {
      this._value = this.bemElement(this._block, this._modifiers, element, elementModifiers);
    }
  }

  ngOnInit() {
    this._elRef.nativeElement.className = this._value;
  }

  private bemElement(block, modifiers, element, elementModifiers) {
    return this.bemBlockArray(block, modifiers).map(blockWithModifiers => {
      return this.bemBlockArray(element, elementModifiers).map(elementWithModifiers => {
        return blockWithModifiers + '__' + elementWithModifiers;
      }).join(' ');
    }).join(' ');
  }

  private bemBlockArray(block: string, modifiers: string[]): string[] {
    return [ block ].concat(modifiers.map(modifier => {
      return block + '--' + modifier;
    }));
  }
}
