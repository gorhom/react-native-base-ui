import type {
  ColorTokens,
  CoreSemanticColorTokens,
  CoreExtensionSemanticColorTokens,
  SemanticColorTokens,
} from '../types.js';
import { colorTokens } from './colorTokens';
import { hexToRgba } from '../utilities';
import { colors } from '../colors';

export const getSemanticColorTokens = (
  foundation: ColorTokens = colorTokens
): SemanticColorTokens => {
  const core: CoreSemanticColorTokens = {
    // Background
    backgroundPrimary: foundation.primaryB,
    backgroundSecondary: colors.gray50,
    backgroundTertiary: colors.gray100,
    backgroundInversePrimary: foundation.primaryA,
    backgroundInverseSecondary: colors.gray800,

    // Content
    contentPrimary: foundation.primaryA,
    contentSecondary: colors.gray600,
    contentTertiary: colors.gray500,
    contentInversePrimary: foundation.primaryB,
    contentInverseSecondary: colors.gray300,
    contentInverseTertiary: colors.gray400,

    // Border
    borderOpaque: colors.gray200,
    borderTransparent: hexToRgba(foundation.primaryA, '0.08'),
    borderSelected: foundation.primaryA,
    borderInverseOpaque: colors.gray700,
    borderInverseTransparent: hexToRgba(foundation.primaryB, '0.2'),
    borderInverseSelected: foundation.primaryB,
  };

  const coreExtensions: CoreExtensionSemanticColorTokens = {
    // Backgrounds
    backgroundStateDisabled: colors.gray50,
    backgroundOverlayDark: hexToRgba(colors.black, '0.3'),
    backgroundOverlayLight: hexToRgba(colors.black, '0.08'),
    backgroundAccent: foundation.accent,
    backgroundNegative: foundation.negative,
    backgroundWarning: foundation.warning,
    backgroundPositive: foundation.positive,
    backgroundLightAccent: colors.blue50,
    backgroundLightNegative: colors.red50,
    backgroundLightWarning: colors.yellow50,
    backgroundLightPositive: colors.green50,
    backgroundAlwaysDark: colors.black,
    backgroundAlwaysLight: colors.white,

    // Content
    contentStateDisabled: colors.gray400,
    contentAccent: foundation.accent,
    contentOnColor: colors.white,
    contentOnColorInverse: colors.black,
    contentNegative: foundation.negative,
    contentWarning: colors.yellow500,
    contentPositive: foundation.positive,

    // Border
    borderStateDisabled: colors.gray50,
    borderAccent: colors.blue400,
    borderAccentLight: colors.blue200,
    borderNegative: colors.red200,
    borderWarning: colors.yellow200,
    borderPositive: colors.green200,
  };
  return {
    ...core,
    ...coreExtensions,
  };
};
