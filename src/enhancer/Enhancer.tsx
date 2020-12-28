import React from 'react';
import { View } from 'react-native';
import { useThemedStyle } from '@gorhom/base-ui';
import { stylesCreator } from './styles';
import type { EnhancerProps } from './types';

const Enhancer = ({ component: Component = null, position }: EnhancerProps) => {
  //#region styles
  const styles = useThemedStyle(stylesCreator, position);
  //#endregion

  //#region render
  if (Component === null || Component === undefined) {
    return null;
  }

  if (typeof Component === 'function') {
    return <View style={styles.container}>{Component({})}</View>;
  }

  if (typeof Component === 'object') {
    return <View style={styles.container}>{Component}</View>;
  }
  return null;
  //#endregion
};

Enhancer.displayName = 'Enhancer';

export default Enhancer;
