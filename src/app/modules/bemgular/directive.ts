import { Directive, ElementRef, Inject, Input, OnInit, Injector, SkipSelf } from '@angular/core';
import { BemgularConfig, BemgularInternalConfig } from './config';
import { BemgularService } from './service';
import { BEMGULAR } from './token';

@Directive({
  selector: '[bem]',
  providers: [
    BemgularService,
  ],
})
export class BemgularDirective {
  private _internalConfig: BemgularInternalConfig;
  private _value: string = '';

  constructor(
    @Inject(BemgularService) private _service: BemgularService,
    @Inject(BEMGULAR) private _config: BemgularConfig,
    @SkipSelf() private _injector: Injector,
    private _elRef: ElementRef
  ) {
    try {
      this._internalConfig = this._injector.get(BemgularService).extend(this._config);

      console.log('ESISTE UN PARENT!');

    } catch(error) {

      console.log('niente parent');

      this._internalConfig = this._service.extend(this._config);
    }
    this._service.setConfig(this._internalConfig);
  }

  @Input('bem')
  set storeElementAndModifiers(value: string) {
    let split = value.split(',');
    let element: string = split[0];
    let elementModifiers: string[] = split.slice(1).map(modifier => {
      return modifier.trim();
    });
    this._value = this.bemBlockArray(this._internalConfig.block, this._internalConfig.modifiers).map(blockWithModifiers => {
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
