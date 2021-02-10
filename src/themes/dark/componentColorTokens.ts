import { colors } from '../shared/colors';
import { colorTokens } from './colorTokens';
import type { ColorTokens, ComponentColorTokens } from '../types';

export const getComponentColorTokens = (
  themePrimitives: ColorTokens = colorTokens
): ComponentColorTokens => ({
  // buttons
  buttonPrimaryFill: themePrimitives.primary,
  buttonPrimaryText: themePrimitives.black,
  buttonPrimaryHover: themePrimitives.primary100,
  buttonPrimaryActive: themePrimitives.primary200,
  buttonPrimarySelectedText: themePrimitives.black,
  buttonPrimarySelectedFill: themePrimitives.primary200,
  buttonPrimarySpinnerForeground: themePrimitives.primary700,
  buttonPrimarySpinnerBackground: themePrimitives.primary300,

  buttonSecondaryFill: themePrimitives.primary700,
  buttonSecondaryText: themePrimitives.primary,
  buttonSecondaryHover: themePrimitives.primary600,
  buttonSecondaryActive: themePrimitives.primary500,
  buttonSecondarySelectedText: themePrimitives.primary,
  buttonSecondarySelectedFill: themePrimitives.primary500,
  buttonSecondarySpinnerForeground: themePrimitives.white,
  buttonSecondarySpinnerBackground: themePrimitives.primary400,

  buttonTertiaryFill: 'transparent',
  buttonTertiaryText: themePrimitives.primary,
  buttonTertiaryHover: themePrimitives.primary700,
  buttonTertiaryActive: themePrimitives.primary600,
  buttonTertiarySelectedText: themePrimitives.primary,
  buttonTertiarySelectedFill: themePrimitives.primary600,
  buttonTertiarySpinnerForeground: themePrimitives.primary50,
  buttonTertiarySpinnerBackground: themePrimitives.primary500,

  buttonMinimalFill: 'transparent',
  buttonMinimalText: themePrimitives.primary,
  buttonMinimalHover: themePrimitives.primary700,
  buttonMinimalActive: themePrimitives.primary600,
  buttonMinimalSelectedText: themePrimitives.primary,
  buttonMinimalSelectedFill: themePrimitives.primary600,
  buttonMinimalSpinnerForeground: themePrimitives.primary50,
  buttonMinimalSpinnerBackground: themePrimitives.primary500,

  buttonDisabledFill: themePrimitives.mono600,
  buttonDisabledText: themePrimitives.mono300,
  buttonDisabledSpinnerForeground: themePrimitives.mono200,
  buttonDisabledSpinnerBackground: themePrimitives.mono400,

  // Input
  inputBorder: themePrimitives.mono600,
  inputFill: themePrimitives.mono600,
  inputFillActive: themePrimitives.mono500,
  inputFillError: themePrimitives.negative700,
  inputFillDisabled: themePrimitives.mono800,
  inputFillPositive: themePrimitives.positive700,
  inputTextDisabled: themePrimitives.mono500,
  inputBorderError: themePrimitives.negative400,
  inputBorderPositive: themePrimitives.positive400,
  inputBorderFocused: themePrimitives.primary,
  inputEnhancerFill: themePrimitives.mono500,
  inputEnhancerFillDisabled: themePrimitives.mono700,
  inputEnhancerTextDisabled: themePrimitives.mono500,
  inputPlaceholder: themePrimitives.mono300,
  inputPlaceholderDisabled: themePrimitives.mono500,

  // tag
  tagFontDisabledRampUnit: '600',
  tagOutlinedDisabledRampUnit: '700',
  tagSolidFontRampUnit: '0',
  tagSolidRampUnit: '500',
  tagOutlinedFontRampUnit: '500',
  tagOutlinedRampUnit: '500',

  // Neutral
  tagNeutralOutlinedFont: themePrimitives.mono100,
  tagNeutralOutlinedBackground: themePrimitives.mono200,
  tagNeutralSolidFont: themePrimitives.black,
  tagNeutralSolidBackground: themePrimitives.primary200, // not much we can do to get the correct gray here
  tagNeutralFontDisabled: themePrimitives.mono400,
  tagNeutralOutlinedDisabled: themePrimitives.mono500,

  // Primary
  tagPrimaryOutlinedFont: themePrimitives.primary200,
  tagPrimaryOutlinedBackground: themePrimitives.primary400,
  tagPrimarySolidFont: themePrimitives.black,
  tagPrimarySolidBackground: themePrimitives.primary200,
  tagPrimaryFontDisabled: themePrimitives.primary600,
  tagPrimaryOutlinedDisabled: themePrimitives.primary700,

  // Accent
  tagAccentOutlinedFont: themePrimitives.accent200,
  tagAccentOutlinedBackground: themePrimitives.accent500,
  tagAccentSolidFont: themePrimitives.white,
  tagAccentSolidBackground: themePrimitives.accent500,
  tagAccentFontDisabled: themePrimitives.accent600,
  tagAccentOutlinedDisabled: themePrimitives.accent700,

  // Positive
  tagPositiveOutlinedFont: themePrimitives.positive300,
  tagPositiveOutlinedBackground: themePrimitives.positive500,
  tagPositiveSolidFont: themePrimitives.white,
  tagPositiveSolidBackground: themePrimitives.positive500,
  tagPositiveFontDisabled: themePrimitives.positive600,
  tagPositiveOutlinedDisabled: themePrimitives.positive700,

  // Warning
  tagWarningOutlinedFont: themePrimitives.warning300,
  tagWarningOutlinedBackground: themePrimitives.warning500,
  tagWarningSolidFont: themePrimitives.black,
  tagWarningSolidBackground: themePrimitives.warning500,
  tagWarningFontDisabled: themePrimitives.warning600,
  tagWarningOutlinedDisabled: themePrimitives.warning700,

  // Negative
  tagNegativeOutlinedFont: themePrimitives.negative300,
  tagNegativeOutlinedBackground: themePrimitives.negative500,
  tagNegativeSolidFont: themePrimitives.white,
  tagNegativeSolidBackground: themePrimitives.negative500,
  tagNegativeFontDisabled: themePrimitives.negative600,
  tagNegativeOutlinedDisabled: themePrimitives.negative700,

  // orange
  tagOrangeOutlinedFont: colors.orange300,
  tagOrangeOutlinedBackground: colors.orange500,
  tagOrangeSolidFont: themePrimitives.white,
  tagOrangeSolidBackground: colors.orange500,
  tagOrangeFontDisabled: colors.orange600,
  tagOrangeOutlinedDisabled: colors.orange700,

  // purple
  tagPurpleOutlinedFont: colors.purple300,
  tagPurpleOutlinedBackground: colors.purple500,
  tagPurpleSolidFont: themePrimitives.white,
  tagPurpleSolidBackground: colors.purple500,
  tagPurpleFontDisabled: colors.purple600,
  tagPurpleOutlinedDisabled: colors.purple700,

  // brown
  tagBrownOutlinedFont: colors.brown300,
  tagBrownOutlinedBackground: colors.brown500,
  tagBrownSolidFont: themePrimitives.white,
  tagBrownSolidBackground: colors.brown500,
  tagBrownFontDisabled: colors.brown600,
  tagBrownOutlinedDisabled: colors.brown700,
});
