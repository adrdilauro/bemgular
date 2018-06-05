import { Directive, ElementRef, Inject, Input, OnInit, Injector, SkipSelf } from '@angular/core';
import { BEMGULAR_BLOCK, BEMGULAR_MODIFIERS, BEMGULAR_FEATURE } from './tokens';

@Directive({
  selector: '[bem]',
})
export class BemgularDirective {
  private _block: string;
  private _modifiers: string[];
  private _feature: boolean;
  private _value: string = '';

  constructor(
    @Inject(Injector) private _injector: Injector,
    @SkipSelf() private _parentInjector: Injector,
    private _elRef: ElementRef
  ) {
    this._block = this._injector.get(BEMGULAR_BLOCK, 'block');
    this._modifiers = this._injector.get(BEMGULAR_MODIFIERS, []);
    this._feature = this._injector.get(BEMGULAR_FEATURE, false);
  }

  @Input('bem')
  set storeElementAndModifiers(value: string) {
    let split = value.split(',');
    let element: string = (!!split[0]) ? split[0].trim() : 'block';
    let elementModifiers: string[] = split.slice(1).map(modifier => modifier.trim());
    if (this._feature) {
      this._value = [
        this.bemElement(
          this._parentInjector.get(BEMGULAR_BLOCK, 'block'),
          this._parentInjector.get(BEMGULAR_MODIFIERS, []),
          element,
          elementModifiers
        ),
        this.bemBlockArray(this._block, this._modifiers).join(' '),
      ].join(' ')
    } else {
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
