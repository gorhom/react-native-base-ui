import React from 'react';
import { TouchableOpacity } from 'react-native';
import Enhancer from '../enhancer';
import ButtonContent from './ButtonContent';
import { useThemedStyle, useOverrideComponent } from '../hooks';
import { stylesCreator } from './styles';
import { BUTTON_KIND, BUTTON_SHAPE, BUTTON_SIZE } from './constants';

import type { ButtonProps } from './types';

const Button = ({
  // presets
  overrides,
  kind = BUTTON_KIND.primary,
  size = BUTTON_SIZE.default,
  shape = BUTTON_SHAPE.default,
  // configs
  isLoading = false,
  isSelected = false,
  disabled = false,
  $style,
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
    [styles.baseButton, $style],
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
        <StartEnhancer {...StartEnhancerProps} children={startEnhancer} />
        <Content {...ContentProps} children={children} />
        <EndEnhancer {...EndEnhancerProps} children={endEnhancer} />
      </>
    </BaseButton>
  );
};

Button.displayName = 'Button';

export default Button;
