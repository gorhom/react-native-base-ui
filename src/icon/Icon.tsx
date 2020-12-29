import React from 'react';
import { View } from 'react-native';
import { useThemedStyle, useOverrideComponent } from '../hooks';
import { TYPE } from './constants';
import { stylesCreator } from './styles';

import type { IconProps } from './types';

const Icon = ({ overrides, type = TYPE.type1 }: IconProps) => {
  //#region styles
  const styles = useThemedStyle(stylesCreator);
  //#endregion

  //#region override components
  const [RootView, RootViewProps] = useOverrideComponent(
    View,
    styles.container,
    overrides?.container
  );
  //#endregion

  console.log('type', type);

  return <RootView {...RootViewProps}>{/* IMPLEMENT COMPONENT */}</RootView>;
};

export default Icon;
