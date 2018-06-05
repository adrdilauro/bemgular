import { Injectable } from '@angular/core';
import { BemgularConfig, BemgularInternalConfig } from './config';

@Injectable()
export class BemgularService {
  private _internalConfig: BemgularInternalConfig;

  constructor() {
    this.setConfig({
      block: 'block',
      modifiers: [],
      feature: false,
      isolated: false,
    });
  }

  setConfig(internalConfig: BemgularInternalConfig) {

    console.log('SETTING CONFIG');
    console.log(internalConfig);

    this._internalConfig = {
      block: internalConfig.block,
      modifiers: internalConfig.modifiers,
      feature: internalConfig.feature,
      isolated: internalConfig.isolated,
    };
  }

  extend(configExtension: BemgularConfig): BemgularInternalConfig {
    let newStack: BemgularInternalConfig = {
      block: configExtension.block || this._internalConfig.block,
      modifiers: configExtension.modifiers || this._internalConfig.modifiers,
      feature: (!!configExtension.feature),
      isolated: (!!configExtension.isolated),
    };
    return newStack;
  }
}
