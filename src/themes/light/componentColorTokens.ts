import type { ColorTokens, ComponentColorTokens } from '../types';
import { colorTokens } from './colorTokens';

export const getComponentColorTokens = (
  themePrimitives: ColorTokens = colorTokens
): ComponentColorTokens => ({
  // buttons
  buttonPrimaryFill: themePrimitives.primary,
  buttonPrimaryText: themePrimitives.white,
  buttonPrimaryHover: themePrimitives.primary700,
  buttonPrimaryActive: themePrimitives.primary600,
  buttonPrimarySelectedFill: themePrimitives.primary600,
  buttonPrimarySelectedText: themePrimitives.white,
  buttonPrimarySpinnerForeground: themePrimitives.primary50,
  buttonPrimarySpinnerBackground: themePrimitives.primary500,

  buttonSecondaryFill: themePrimitives.primary100,
  buttonSecondaryText: themePrimitives.primary,
  buttonSecondaryHover: themePrimitives.primary200,
  buttonSecondaryActive: themePrimitives.primary300,
  buttonSecondarySelectedFill: themePrimitives.primary300,
  buttonSecondarySelectedText: themePrimitives.primary,
  buttonSecondarySpinnerForeground: themePrimitives.primary700,
  buttonSecondarySpinnerBackground: themePrimitives.primary300,

  buttonTertiaryFill: 'transparent',
  buttonTertiaryText: themePrimitives.primary,
  buttonTertiaryHover: themePrimitives.primary50,
  buttonTertiaryActive: themePrimitives.primary100,
  buttonTertiarySelectedFill: themePrimitives.primary100,
  buttonTertiarySelectedText: themePrimitives.primary,
  buttonTertiarySpinnerForeground: themePrimitives.primary700,
  buttonTertiarySpinnerBackground: themePrimitives.primary300,

  buttonMinimalFill: 'transparent',
  buttonMinimalText: themePrimitives.primary,
  buttonMinimalHover: themePrimitives.primary50,
  buttonMinimalActive: themePrimitives.primary100,
  buttonMinimalSelectedFill: themePrimitives.primary100,
  buttonMinimalSelectedText: themePrimitives.primary,
  buttonMinimalSpinnerForeground: themePrimitives.primary700,
  buttonMinimalSpinnerBackground: themePrimitives.primary300,

  buttonDisabledFill: themePrimitives.mono200,
  buttonDisabledText: themePrimitives.mono600,
  buttonDisabledSpinnerForeground: themePrimitives.mono600,
  buttonDisabledSpinnerBackground: themePrimitives.mono400,

  // Inputs
  inputBorder: themePrimitives.mono300,
  inputFill: themePrimitives.mono300,
  inputFillError: themePrimitives.negative50,
  inputFillDisabled: themePrimitives.mono200,
  inputFillActive: themePrimitives.mono200,
  inputFillPositive: themePrimitives.positive50,
  inputTextDisabled: themePrimitives.mono600,
  inputBorderError: themePrimitives.negative200,
  inputBorderPositive: themePrimitives.positive200,
  inputBorderFocused: themePrimitives.primary,
  inputEnhancerFill: themePrimitives.mono300,
  inputEnhancerFillDisabled: themePrimitives.mono300,
  inputEnhancerTextDisabled: themePrimitives.mono600,
  inputPlaceholder: themePrimitives.mono700,
  inputPlaceholderDisabled: themePrimitives.mono600,
});
