import React, { useMemo } from 'react';
import { isValidElementType } from 'react-is';

import type { Style, Theme } from '../themes/types';
import type { Override, OverrideObject } from '../types';
import { useTheme } from './useTheme';

const getOverrideComponent = (
  override?: Override
): React.ComponentType<any> | undefined => {
  if (!override) {
    return undefined;
  }
  if (isValidElementType(override)) {
    return override as React.ComponentType<any>;
  }
  if (override && typeof override === 'object') {
    return override.component;
  }

  return undefined;
};

const getOverrideStyle = (
  theme: Theme,
  override?: Override
): Style | undefined => {
  if (
    override &&
    typeof (override as OverrideObject<any>).style === 'function'
  ) {
    // @ts-ignore
    return override.style(theme);
  }

  // @ts-ignore
  return override?.style;
};

export const useOverrideComponent = <T>(
  defaultComponent: React.ComponentType<T>,
  defaultStyle: Style,
  override?: Override
): [React.ComponentType<T>, T] => {
  ///#region hooks
  const theme = useTheme();
  //#endregion

  //#region variables
  const Component = useMemo(
    () => getOverrideComponent(override) ?? defaultComponent,
    // `defaultComponent` always stable
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [override]
  );

  const props = useMemo<any>(
    () => ({
      ...(override && 'props' in override ? override?.props : {}),
      style: [defaultStyle, getOverrideStyle(theme, override)],
    }),
    [override, defaultStyle, theme]
  );
  //#endregion

  return [Component, props];
};
