import React, { useMemo } from 'react';
import { Text } from 'react-native';
import { useThemedStyle, useOverrideComponent } from '../../hooks';
import { DEFAULT_SIZE, ICON_SETS } from './constants';
import { stylesCreator } from './styles';

import type { IconProps } from './types';

const Icon = ({
  overrides,
  name,
  size = DEFAULT_SIZE,
  color,
  $style,
}: IconProps) => {
  //#region variables
  const iconChar = useMemo(() => ICON_SETS[name], [name]);
  //#endregion

  //#region styles
  const styles = useThemedStyle(stylesCreator, size, color);
  //#endregion

  //#region override components
  const [RootView, RootViewProps] = useOverrideComponent(
    Text,
    [styles.container, $style],
    overrides?.container
  );
  //#endregion

  return <RootView {...RootViewProps}>{iconChar}</RootView>;
};

export default Icon;
