import type React from 'react';
import type { Theme } from './themes';
import type { Style } from './themes/types';

//#region overrides
export type ConfigurationOverrideFunction = (theme: Theme) => {};
export type ConfigurationOverrideObject = {};

export type ConfigurationOverride =
  | ConfigurationOverrideObject
  | ConfigurationOverrideFunction;

export interface OverrideObject<C> {
  component?: React.ComponentType<C>;
  props?: ConfigurationOverride;
  style?: ConfigurationOverride;
}

export type Override<C = any> = OverrideObject<C> | React.ComponentType<C>;
//#endregion

export interface BaseUIComponent<O, S extends Style> {
  /**
   * Defines the component overrides.
   * @default undefined
   */
  overrides?: O;

  /**
   * Defined the component override style.
   * @default undefined
   */
  $style?: S;
}
