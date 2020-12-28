import React from 'react';
import { TouchableOpacity } from 'react-native';
import Enhancer from '../enhancer';
import ButtonContent from './ButtonContent';
import { useThemedStyle, useOverrideComponent } from '../hooks';
import { stylesCreator } from './styles';
import { KIND, SHAPE, SIZE } from './constants';

import type { ButtonProps } from './types';

const Button = ({
  // presets
  overrides,
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
  //#endregion

  //#region components
  const [BaseButton, BaseButtonProps] = useOverrideComponent(
    TouchableOpacity,
    styles.baseButton,
    overrides?.baseButton
  );

  const [StartEnhancer, StartEnhancerProps] = useOverrideComponent(
    Enhancer,
    styles.startEnhancer,
    overrides?.startEnhancer
  );

  const [EndEnhancer, EndEnhancerProps] = useOverrideComponent(
    Enhancer,
    styles.endEnhancer,
    overrides?.endEnhancer
  );

  const [Content, ContentProps] = useOverrideComponent(
    ButtonContent,
    styles.content,
    overrides?.content
  );
  //#endregion
  return (
    <BaseButton {...BaseButtonProps} onPress={onPress}>
      <>
        <StartEnhancer
          {...StartEnhancerProps}
          position="start"
          component={startEnhancer}
        />
        <Content {...ContentProps} children={children} />
        <EndEnhancer
          {...EndEnhancerProps}
          position="end"
          component={endEnhancer}
        />
      </>
    </BaseButton>
  );
};

Button.displayName = 'Button';

export default Button;
