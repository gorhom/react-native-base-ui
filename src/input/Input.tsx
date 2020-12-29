import React, { useMemo } from 'react';
import { View, TextInput as RNTextInput } from 'react-native';
import Enhancer from '../enhancer';
import { useOverrideComponent, useThemedStyle } from '../hooks';
import { SIZE, ADJOINED } from './constants';
import { stylesCreator } from './styles';

import type { InputProps } from './types';

const Input = ({
  overrides,
  // configs
  positive = false,
  error = false,
  disabled = false,
  size = SIZE.default,
  // enhancers
  startEnhancer,
  endEnhancer,
  ...restInputProps
}: InputProps) => {
  //#region variables
  const adjoined = useMemo(
    () =>
      startEnhancer && endEnhancer
        ? ADJOINED.both
        : startEnhancer
        ? ADJOINED.left
        : endEnhancer
        ? ADJOINED.right
        : ADJOINED.none,
    [startEnhancer, endEnhancer]
  );
  //#region

  //#region styles
  const styles = useThemedStyle(
    stylesCreator,
    size,
    positive,
    error,
    disabled,
    false,
    adjoined
  );
  //#endregion

  //#region override components
  const [Container, ContainerProps] = useOverrideComponent(
    View,
    styles.container,
    overrides?.container
  );

  const [TextInput, TextInputProps] = useOverrideComponent(
    RNTextInput,
    styles.baseInput,
    overrides?.baseInput
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
  //#endregion

  //#region variables
  /**
   * since react native does not support `placeholder` in styles,
   * here we extract it from the generated style and provide it
   * as a prop.
   */
  const placeholderTextColor = useMemo(
    // @ts-ignore
    () => Object.assign({}, ...TextInputProps.style).placeholder,
    [TextInputProps.style]
  );
  //#endregion
  return (
    <Container {...ContainerProps}>
      <StartEnhancer
        {...StartEnhancerProps}
        position="start"
        component={startEnhancer}
      />
      <TextInput
        placeholderTextColor={placeholderTextColor}
        {...restInputProps}
        {...TextInputProps}
      />
      <EndEnhancer
        {...EndEnhancerProps}
        position="end"
        component={endEnhancer}
      />
    </Container>
  );
};

export default Input;
