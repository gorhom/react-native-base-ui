import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';

export interface ColorTokens {
  // Primary Palette
  primaryA: string;
  primaryB: string;
  primary: string;
  primary50: string;
  primary100: string;
  primary200: string;
  primary300: string;
  primary400: string;
  primary500: string;
  primary600: string;
  primary700: string;

  // Accent Palette
  accent: string;
  accent50: string;
  accent100: string;
  accent200: string;
  accent300: string;
  accent400: string;
  accent500: string;
  accent600: string;
  accent700: string;

  // Alert Palette
  negative: string;
  negative50: string;
  negative100: string;
  negative200: string;
  negative300: string;
  negative400: string;
  negative500: string;
  negative600: string;
  negative700: string;

  // Warning Palette
  warning: string;
  warning50: string;
  warning100: string;
  warning200: string;
  warning300: string;
  warning400: string;
  warning500: string;
  warning600: string;
  warning700: string;

  // Success Palette
  positive: string;
  positive50: string;
  positive100: string;
  positive200: string;
  positive300: string;
  positive400: string;
  positive500: string;
  positive600: string;
  positive700: string;

  // Monochrome Palette
  white: string;
  black: string;
  mono100: string;
  mono200: string;
  mono300: string;
  mono400: string;
  mono500: string;
  mono600: string;
  mono700: string;
  mono800: string;
  mono900: string;
  mono1000: string;

  // Rating Palette
  rating200: string;
  rating400: string;
}

export interface CoreContentColorTokens {
  contentPrimary: string;
  contentSecondary: string;
  contentTertiary: string;
  contentInversePrimary: string;
  contentInverseSecondary: string;
  contentInverseTertiary: string;
}

export interface CoreSemanticColorTokens extends CoreContentColorTokens {
  // Background
  backgroundPrimary: string;
  backgroundSecondary: string;
  backgroundTertiary: string;
  backgroundInversePrimary: string;
  backgroundInverseSecondary: string;

  // Border
  borderOpaque: string;
  borderTransparent?: string;
  borderSelected: string;
  borderInverseOpaque: string;
  borderInverseTransparent?: string;
  borderInverseSelected: string;
}

export interface CoreExtensionSemanticColorTokens {
  // Backgrounds
  backgroundStateDisabled: string;
  backgroundOverlayDark?: string;
  backgroundOverlayLight?: string;
  backgroundAccent: string;
  backgroundNegative: string;
  backgroundWarning: string;
  backgroundPositive: string;
  backgroundLightAccent: string;
  backgroundLightPositive: string;
  backgroundLightNegative: string;
  backgroundLightWarning: string;
  backgroundAlwaysDark: string;
  backgroundAlwaysLight: string;

  // Content
  contentStateDisabled: string;
  contentAccent: string;
  contentOnColor: string;
  contentOnColorInverse: string;
  contentNegative: string;
  contentWarning: string;
  contentPositive: string;

  // Border
  borderStateDisabled: string;
  borderAccent: string;
  borderAccentLight: string;
  borderNegative: string;
  borderWarning: string;
  borderPositive: string;
}

export interface SemanticColorTokens
  extends CoreSemanticColorTokens,
    CoreExtensionSemanticColorTokens {}

export interface Border {
  borderColor: string;
  // longhand border-style properties do not accept string values
  borderStyle:
    | 'dashed'
    | 'dotted'
    | 'double'
    | 'groove'
    | 'hidden'
    | 'inset'
    | 'none'
    | 'outset'
    | 'ridge'
    | 'solid';
  borderWidth: number;
}

export interface Borders {
  border100: Border;
  border200: Border;
  border300: Border;
  border400: Border;
  border500: Border;
  border600: Border;
  radius100: number;
  radius200: number;
  radius300: number;
  radius400: number;
  useRoundedCorners: boolean;
  buttonBorderRadius: number;
  surfaceBorderRadius: number;
  inputBorderRadius: number;
  popoverBorderRadius: number;
}

export interface ComponentColorTokens {
  // Buttons
  buttonPrimaryFill: string;
  buttonPrimaryText: string;
  buttonPrimaryHover: string;
  buttonPrimaryActive: string;
  buttonPrimarySelectedText: string;
  buttonPrimarySelectedFill: string;
  buttonPrimarySpinnerForeground: string;
  buttonPrimarySpinnerBackground: string;
  buttonSecondaryFill: string;
  buttonSecondaryText: string;
  buttonSecondaryHover: string;
  buttonSecondaryActive: string;
  buttonSecondarySelectedText: string;
  buttonSecondarySelectedFill: string;
  buttonSecondarySpinnerForeground: string;
  buttonSecondarySpinnerBackground: string;
  buttonTertiaryFill: string;
  buttonTertiaryText: string;
  buttonTertiaryHover: string;
  buttonTertiaryActive: string;
  buttonTertiarySelectedText: string;
  buttonTertiarySelectedFill: string;
  buttonTertiarySpinnerForeground: string;
  buttonTertiarySpinnerBackground: string;
  buttonMinimalFill: string;
  buttonMinimalText: string;
  buttonMinimalHover: string;
  buttonMinimalActive: string;
  buttonMinimalSelectedText: string;
  buttonMinimalSelectedFill: string;
  buttonMinimalSpinnerForeground: string;
  buttonMinimalSpinnerBackground: string;
  buttonDisabledFill: string;
  buttonDisabledText: string;
  buttonDisabledSpinnerForeground: string;
  buttonDisabledSpinnerBackground: string;

  // Input
  inputBorder: string;
  inputFill: string;
  inputFillError: string;
  inputFillDisabled: string;
  inputFillActive: string;
  inputFillPositive: string;
  inputTextDisabled: string;
  inputBorderError: string;
  inputBorderPositive: string;
  inputBorderFocused: string;
  inputEnhancerFill: string;
  inputEnhancerFillDisabled: string;
  inputEnhancerTextDisabled: string;
  inputPlaceholder: string;
  inputPlaceholderDisabled: string;
}

export interface FontTokens {
  primaryFontFamily: string;
}

export interface Font {
  fontFamily: string;
  fontWeight:
    | 'bold'
    | 'normal'
    | '100'
    | '200'
    | '300'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  fontSize: number;
  lineHeight: number;
}

export interface Typography {
  font100: Font;
  font150: Font;
  font200: Font;
  font250: Font;
  font300: Font;
  font350: Font;
  font400: Font;
  font450: Font;
  font550: Font;
  font650: Font;
  font750: Font;
  font850: Font;
  font950: Font;
  font1050: Font;
  font1150: Font;
  font1250: Font;
  font1350: Font;
  font1450: Font;

  ParagraphXSmall: Font;
  ParagraphSmall: Font;
  ParagraphMedium: Font;
  ParagraphLarge: Font;
  LabelXSmall: Font;
  LabelSmall: Font;
  LabelMedium: Font;
  LabelLarge: Font;
  HeadingXSmall: Font;
  HeadingSmall: Font;
  HeadingMedium: Font;
  HeadingLarge: Font;
  HeadingXLarge: Font;
  HeadingXXLarge: Font;
  DisplayXSmall: Font;
  DisplaySmall: Font;
  DisplayMedium: Font;
  DisplayLarge: Font;
}

export interface Sizing {
  scale0: number;
  scale100: number;
  scale200: number;
  scale300: number;
  scale400: number;
  scale500: number;
  scale550: number;
  scale600: number;
  scale650: number;
  scale700: number;
  scale750: number;
  scale800: number;
  scale850: number;
  scale900: number;
  scale950: number;
  scale1000: number;
  scale1200: number;
  scale1400: number;
  scale1600: number;
  scale2400: number;
  scale3200: number;
  scale4800: number;
}

export interface Colors
  extends ColorTokens,
    ComponentColorTokens,
    SemanticColorTokens {}

export interface Theme {
  name: string;
  borders: Borders;
  colors: Colors;
  sizing: Sizing;
  typography: Typography;
}

export type Style = ViewStyle | TextStyle | ImageStyle;

export type NamedStyles<T> = {
  [P in keyof T]: Style;
};
