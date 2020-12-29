import React from 'react';
import { Text } from 'react-native';
import { useThemedStyle } from '@gorhom/base-ui';
import { stylesCreator } from './styles';
import type { EnhancerProps } from './types';

const Enhancer = ({
  position,
  component: Component = null,
  style,
}: EnhancerProps) => {
  //#region styles
  const styles = useThemedStyle(stylesCreator, position);
  //#endregion

  //#region render
  if (Component === null || Component === undefined) {
    return null;
  }

  if (typeof Component === 'function') {
    // @ts-ignore
    return Component({ style: [styles.container, style] });
  }

  if (typeof Component === 'object') {
    // @ts-ignore
    return <Component style={[styles.container, style]} />;
  }

  if (typeof Component === 'string') {
    return <Text style={[styles.container, style]}>{Component}</Text>;
  }
  return null;
  //#endregion
};

Enhancer.displayName = 'Enhancer';

export default Enhancer;
