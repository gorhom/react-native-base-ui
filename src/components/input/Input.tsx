import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  View,
  TextInput as RNTextInput,
  TextInputFocusEventData,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import { Enhancer } from '../enhancer';
import { Icon } from '../icon';
import { Button, BUTTON_KIND, BUTTON_SIZE } from '../button';
import { useOverrideComponent, useThemedStyle } from '../../hooks';
import { INPUT_SIZE, INPUT_ADJOINED, DEFAULT_CLEARABLE } from './constants';
import { stylesCreator } from './styles';

import type { InputProps } from './types';

const Input = forwardRef<RNTextInput, InputProps>(
  (
    {
      // overrides
      overrides,
      // configs
      positive = false,
      error = false,
      disabled = false,
      clearable = DEFAULT_CLEARABLE,
      size = INPUT_SIZE.default,
      // text input props
      value: _providedValue = '',
      secureTextEntry: _providedSecureTextEntry,
      // enhancers
      startEnhancer = null,
      endEnhancer = null,
      // callbacks
      onChangeText: _providedOnChangeText,
      onBlur: _providedOnBlur,
      onFocus: _providedOnFocus,
      ...restInputProps
    },
    ref
  ) => {
    //#region state/refs
    const [value, setValue] = useState(_providedValue);
    const [focused, setFocused] = useState(false);
    const [masked, setMasked] = useState(_providedSecureTextEntry);
    const inputRef = useRef<RNTextInput>(null);
    //#endregion

    //#region variables
    const adjoined = useMemo(
      () =>
        startEnhancer && endEnhancer
          ? INPUT_ADJOINED.both
          : startEnhancer
          ? INPUT_ADJOINED.start
          : endEnhancer
          ? INPUT_ADJOINED.end
          : INPUT_ADJOINED.none,
      [startEnhancer, endEnhancer]
    );
    const hasIconTrailing = useMemo(
      () => clearable || _providedSecureTextEntry,
      [clearable, _providedSecureTextEntry]
    );
    //#endregion

    //#region styles
    const styles = useThemedStyle(
      stylesCreator,
      size,
      positive,
      error,
      disabled,
      focused,
      adjoined,
      hasIconTrailing
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
    ] = useOverrideComponent(
      RNTextInput,
      styles.baseInput,
      overrides?.baseInput
    );

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

    const [ClearIconContainer, clearIconContainerProps] = useOverrideComponent(
      Button,
      styles.clearIconContainer,
      overrides?.clearIconContainer
    );

    const [ClearIcon, clearIconProps] = useOverrideComponent(
      Icon,
      styles.clearIcon,
      overrides?.clearIcon
    );

    const [
      MaskToggleContainer,
      maskToggleContainerProps,
    ] = useOverrideComponent(
      Button,
      styles.maskToggleContainer,
      overrides?.maskToggleContainer
    );

    const [MaskToggleHideIcon, maskToggleHideIconProps] = useOverrideComponent(
      Icon,
      styles.maskToggleHideIcon,
      overrides?.maskToggleHideIcon
    );

    const [MaskToggleShowIcon, maskToggleShowIconProps] = useOverrideComponent(
      Icon,
      styles.maskToggleShowIcon,
      overrides?.maskToggleShowIcon
    );
    console.log(
      'maskToggleShowIcon',
      styles.maskToggleShowIcon,
      maskToggleShowIconProps
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
      () => textInputProps.style.placeholder,
      [textInputProps.style]
    );
    const selectionColor = useMemo(
      // @ts-ignore
      () => textInputProps.style.caretColor,
      [textInputProps.style]
    );
    //#endregion

    //#region callbacks
    const handleOnChange = useCallback(
      ({
        nativeEvent: { text },
      }: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setValue(text);
      },
      []
    );
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
    const handleOnClear = useCallback(() => {
      setValue('');
    }, []);
    const handleOnMaskTogglePress = useCallback(() => {
      setMasked(state => !state);
    }, []);
    //#endregion

    //#region forward ref
    useImperativeHandle(ref, () => inputRef.current!);
    //#endregion

    //#region effects
    useEffect(() => {
      if (_providedOnChangeText) {
        _providedOnChangeText(value);
      }
    }, [value, _providedOnChangeText]);
    //#endregion

    return (
      <Container {...containerProps}>
        <StartEnhancer {...startEnhancerProps} children={startEnhancer} />
        <TextInput
          // @ts-ignore
          ref={inputRef}
          placeholderTextColor={placeholderTextColor}
          selectionColor={selectionColor}
          onChange={handleOnChange}
          onChangeText={text => console.log('onChangeText', text)}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          value={value}
          secureTextEntry={masked}
          {...restInputProps}
          {...textInputProps}
        />
        {clearable && value && value.length ? (
          <ClearIconContainer
            kind={BUTTON_KIND.minimal}
            size={BUTTON_SIZE.mini}
            onPress={handleOnClear}
            {...clearIconContainerProps}
          >
            {/** @ts-ignore */}
            <ClearIcon name="delete-alt" {...clearIconProps} />
          </ClearIconContainer>
        ) : null}
        {_providedSecureTextEntry && (
          <MaskToggleContainer
            kind={BUTTON_KIND.minimal}
            size={BUTTON_SIZE.mini}
            onPress={handleOnMaskTogglePress}
            {...maskToggleContainerProps}
          >
            {masked ? (
              <MaskToggleShowIcon name="show" {...maskToggleShowIconProps} />
            ) : (
              <MaskToggleHideIcon name="hide" {...maskToggleHideIconProps} />
            )}
          </MaskToggleContainer>
        )}
        <EndEnhancer {...endEnhancerProps} children={endEnhancer} />
      </Container>
    );
  }
);

export default Input;
