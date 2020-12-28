import type React from 'react';
import type { Theme } from './themes';

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
