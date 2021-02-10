import { colors } from '../shared/colors';
import { colorTokens } from './colorTokens';
import type { ColorTokens, ComponentColorTokens } from '../types';

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

  // tag
  // Custom ramps
  tagFontDisabledRampUnit: '100',
  tagOutlinedDisabledRampUnit: '200',
  tagSolidFontRampUnit: '0',
  tagSolidRampUnit: '400',
  tagOutlinedFontRampUnit: '400',
  tagOutlinedRampUnit: '200',

  // Neutral
  tagNeutralFontDisabled: themePrimitives.mono600,
  tagNeutralOutlinedDisabled: themePrimitives.mono400,
  tagNeutralSolidFont: themePrimitives.white,
  tagNeutralSolidBackground: themePrimitives.black,
  tagNeutralOutlinedBackground: themePrimitives.mono600,
  tagNeutralOutlinedFont: themePrimitives.black,

  // Primary
  tagPrimaryFontDisabled: themePrimitives.primary400,
  tagPrimaryOutlinedBackground: themePrimitives.primary400,
  tagPrimaryOutlinedDisabled: themePrimitives.primary200,
  tagPrimarySolidFont: themePrimitives.white,
  tagPrimarySolidBackground: themePrimitives.primary,
  tagPrimaryOutlinedFont: themePrimitives.primary,

  // Accent
  tagAccentFontDisabled: themePrimitives.accent200,
  tagAccentOutlinedDisabled: themePrimitives.accent200,
  tagAccentSolidFont: themePrimitives.white,
  tagAccentSolidBackground: themePrimitives.accent400,
  tagAccentOutlinedBackground: themePrimitives.accent200,
  tagAccentOutlinedFont: themePrimitives.accent400,

  // Positive
  tagPositiveFontDisabled: themePrimitives.positive200,
  tagPositiveOutlinedDisabled: themePrimitives.positive200,
  tagPositiveSolidFont: themePrimitives.white,
  tagPositiveSolidBackground: themePrimitives.positive400,
  tagPositiveOutlinedBackground: themePrimitives.positive200,
  tagPositiveOutlinedFont: themePrimitives.positive400,

  // Warning
  tagWarningFontDisabled: themePrimitives.warning300,
  tagWarningOutlinedDisabled: themePrimitives.warning300,
  tagWarningSolidFont: themePrimitives.warning700,
  tagWarningSolidBackground: themePrimitives.warning400,
  tagWarningOutlinedBackground: themePrimitives.warning300,
  tagWarningOutlinedFont: themePrimitives.warning600,

  // Negative
  tagNegativeFontDisabled: themePrimitives.negative200,
  tagNegativeOutlinedDisabled: themePrimitives.negative200,
  tagNegativeSolidFont: themePrimitives.white,
  tagNegativeSolidBackground: themePrimitives.negative400,
  tagNegativeOutlinedBackground: themePrimitives.negative200,
  tagNegativeOutlinedFont: themePrimitives.negative400,

  // orange
  tagOrangeOutlinedFont: colors.orange400,
  tagOrangeOutlinedBackground: colors.orange200,
  tagOrangeSolidFont: themePrimitives.white,
  tagOrangeSolidBackground: colors.orange400,
  tagOrangeFontDisabled: colors.orange200,
  tagOrangeOutlinedDisabled: colors.orange200,

  // purple
  tagPurpleOutlinedFont: colors.purple400,
  tagPurpleOutlinedBackground: colors.purple200,
  tagPurpleSolidFont: themePrimitives.white,
  tagPurpleSolidBackground: colors.purple400,
  tagPurpleFontDisabled: colors.purple200,
  tagPurpleOutlinedDisabled: colors.purple200,

  // brown
  tagBrownOutlinedFont: colors.brown400,
  tagBrownOutlinedBackground: colors.brown200,
  tagBrownSolidFont: themePrimitives.white,
  tagBrownSolidBackground: colors.brown400,
  tagBrownFontDisabled: colors.brown200,
  tagBrownOutlinedDisabled: colors.brown200,
});
