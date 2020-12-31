import React, { useMemo } from 'react';
import { isValidElementType } from 'react-is';
import { mergeDeep } from '../utilities';
import { useTheme } from './useTheme';
import type { Style, Theme } from '../themes/types';
import type { Override, OverrideObject } from '../types';

const isOverrideComponent = (override?: Override) => {
  if (isValidElementType(override)) {
    return true;
  }

  return false;
};

const getOverrideComponent = (
  override?: Override
): React.ComponentType<any> | undefined => {
  if (isOverrideComponent(override)) {
    return override as React.ComponentType<any>;
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

  return (override as OverrideObject<any>)?.style ?? {};
};

const getMergedStyle = (
  theme: Theme,
  providedStyles?: Style | Partial<Style[]>,
  override?: Override
): Partial<Style[]> => {
  const style = [];
  if (Array.isArray(providedStyles)) {
    style.push(...providedStyles);
  } else {
    style.push(providedStyles);
  }
  style.push(getOverrideStyle(theme, override));
  return style;
};

const getComponentProps = (
  theme: Theme,
  providedStyles?: Style | Partial<Style[]>,
  override?: Override
) => {
  const containerStyle = getMergedStyle(theme, providedStyles, override);
  const props = {
    style: containerStyle,
    $style: containerStyle,
  };

  if (isOverrideComponent(override)) {
    return props;
  }

  return mergeDeep(
    Object.assign({}, props),
    (override as OverrideObject<any>)?.props ?? {}
  );
};

export const useOverrideComponent = <T>(
  defaultComponent: React.ComponentType<T>,
  providedStyles?: Style | Partial<Style[]>,
  override?: Override
): [React.ComponentType<T>, Partial<T>] => {
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
    () => getComponentProps(theme, providedStyles, override),
    [override, providedStyles, theme]
  );
  //#endregion

  return [Component, props];
};
