import React, { useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import { useThemedStyle } from '@gorhom/base-ui';
import Enhancer from '../enhancer';
import { stylesCreator } from './styles';

import type { ButtonProps } from './types';
import { KIND, SHAPE, SIZE } from './constants';

const Button = ({
  style,
  // presets
  kind = KIND.primary,
  size = SIZE.default,
  shape = SHAPE.default,
  // configs
  isLoading = false,
  isSelected = false,
  disabled = false,
  // callbacks
  onPress,
  // components
  startEnhancer,
  endEnhancer,
  children,
}: ButtonProps) => {
  //#region styles
  const styles = useThemedStyle(
    stylesCreator,
    kind,
    size,
    shape,
    isLoading,
    isSelected,
    disabled
  );
  const containerStyle = useMemo(() => [styles.container, style], [
    styles.container,
    style,
  ]);
  //#endregion
  return (
    <TouchableOpacity style={containerStyle} onPress={onPress}>
      <>
        <Enhancer position="start" component={startEnhancer} />
        {children}
        <Enhancer position="end" component={endEnhancer} />
      </>
    </TouchableOpacity>
  );
};

Button.displayName = 'Button';

export default Button;