@Injectable()
export class BemgularService {
  private _stack: BemgularInternalConfig;

  constructor() {
    this._stack = {
      block: 'block',
      modifiers: [],
      feature: false,
      isolated: false,
    };
  }

  extend(configExtension: BemgularConfig): BemgularInternalConfig {
    let newStack: BemgularInternalConfig = {
      block: configExtension.block || this._stack.block,
      modifiers: configExtension.modifiers || this._stack.modifiers,
      feature: (configExtension.feature !== undefined) ? configExtension.feature : this._stack.feature,
      isolated: (configExtension.isolated !== undefined) ? configExtension.isolated : this._stack.isolated,
    };
    this._stack = newStack;
    return newStack;
  }
}
