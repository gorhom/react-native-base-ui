import React from 'react';
import { View } from 'react-native';
import { useThemedStyle, useOverrideComponent } from '../../hooks';
import { TAG_TYPE } from './constants';
import { stylesCreator } from './styles';

import type { TagProps } from './types';

const Tag = ({ overrides, type = TAG_TYPE.type1 }: TagProps) => {
  //#region styles
  const styles = useThemedStyle(stylesCreator);
  //#endregion

  //#region override components
  const [RootView, rootViewProps] = useOverrideComponent(
    View,
    styles.container,
    overrides?.container
  );
  //#endregion

  console.log('type', type);

  return <RootView {...rootViewProps}>{/* IMPLEMENT COMPONENT */}</RootView>;
};

export default Tag;
