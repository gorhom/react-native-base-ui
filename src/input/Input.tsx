import React, { useCallback, useMemo, useState } from 'react';
import {
  View,
  TextInput as RNTextInput,
  TextInputFocusEventData,
  NativeSyntheticEvent,
} from 'react-native';
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
  startEnhancer = null,
  endEnhancer = null,
  // callbacks
  onBlur: _providedOnBlur,
  onFocus: _providedOnFocus,
  ...restInputProps
}: InputProps) => {
  const [focused, setFocused] = useState(false);

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
    focused,
    adjoined
  );
  //#endregion

  //#region override components
  const [Container, containerProps] = useOverrideComponent(
    View,
    styles.container,
    overrides?.container
  );

  const [
    TextInput,
    { onBlur: _overrideOnBlur, onFocus: _overrideOnFocus, ...textInputProps },
  ] = useOverrideComponent(RNTextInput, styles.baseInput, overrides?.baseInput);

  const [StartEnhancer, startEnhancerProps] = useOverrideComponent(
    Enhancer,
    styles.startEnhancer,
    overrides?.startEnhancer
  );

  const [EndEnhancer, endEnhancerProps] = useOverrideComponent(
    Enhancer,
    styles.endEnhancer,
    overrides?.endEnhancer
  );
  //#endregion

  //#region variables
  /**
   * since react native does not support `placeholder` or `caretColor` in styles,
   * here we extract them from the generated style and provide them
   * as a props.
   */
  const placeholderTextColor = useMemo(
    // @ts-ignore
    () => Object.assign({}, ...textInputProps.style).placeholder,
    [textInputProps.style]
  );
  const selectionColor = useMemo(
    () => Object.assign({}, ...textInputProps.style).caretColor,
    [textInputProps.style]
  );
  //#endregion

  //#region callbacks
  const handleOnBlur = useCallback(
    (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setFocused(false);

      if (_providedOnBlur) {
        _providedOnBlur(event);
      }

      if (_overrideOnBlur) {
        _overrideOnBlur(event);
      }
    },
    [_providedOnBlur, _overrideOnBlur]
  );
  const handleOnFocus = useCallback(
    (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setFocused(true);

      if (_providedOnFocus) {
        _providedOnFocus(event);
      }

      if (_overrideOnFocus) {
        _overrideOnFocus(event);
      }
    },
    [_providedOnFocus, _overrideOnFocus]
  );
  //#endregion

  return (
    <Container {...containerProps}>
      <StartEnhancer
        {...startEnhancerProps}
        position="start"
        component={startEnhancer}
      />
      <TextInput
        placeholderTextColor={placeholderTextColor}
        selectionColor={selectionColor}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        {...restInputProps}
        {...textInputProps}
      />
      <EndEnhancer
        {...endEnhancerProps}
        position="end"
        component={endEnhancer}
      />
    </Container>
  );
};

export default Input;
