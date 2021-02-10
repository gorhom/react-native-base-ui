import { createThemedStyles, Theme } from '../../themes';
import type { TagOverrides } from './types';
import { TAG_KIND, TAG_VARIANT, TAG_SIZE } from './constants';

export const stylesCreator = createThemedStyles<TagOverrides>(
  (
    theme,
    kind: TAG_KIND,
    variant: TAG_VARIANT,
    size: TAG_SIZE,
    disabled: boolean,
    clickable: boolean
  ) => {
    const { color, backgroundColor, borderColor } = colorMap[kind][
      getColorStateFromProps(variant, disabled)
    ](theme);

    const font = labelSizeMap(theme, size);
    const paddingHorizontal = paddingMagnitudeMap(theme, size);
    const height = sizeMap[size];
    const iconMargin = iconMarginMap(theme, size);

    return {
      button: {
        margin: clickable ? theme.sizing.scale200 : 0,
      },
      container: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: !disabled && variant === TAG_VARIANT.solid ? 0 : 2,
        borderStyle: 'solid',
        borderColor: borderColor,
        borderRadius: 24,
        height,
        margin: clickable ? 0 : theme.sizing.scale200,
        paddingVertical: theme.sizing.scale0,
        paddingHorizontal: paddingHorizontal,
        backgroundColor,
      },
      label: {
        ...font,
        color,
      },
      iconContainer: {
        overflow: 'hidden',
        width: font.fontSize,
        height: font.fontSize,
        marginLeft: iconMargin,
      },
      icon: {
        marginLeft: ((font.fontSize * 1.75) / 100) * -21,
        marginTop: ((font.fontSize * 1.75) / 100) * -21,
        fontSize: font.fontSize * 1.75,
        color,
      },
    };
  }
);

//#region variables
const COLOR_STATE = {
  disabled: 'disabled',
  solid: 'solid',
  outline: 'outline',
} as const;

const getColorStateFromProps = (variant: TAG_VARIANT, disabled: boolean) => {
  if (disabled) return COLOR_STATE.disabled;
  if (variant === TAG_VARIANT.solid) return COLOR_STATE.solid;
  return COLOR_STATE.outline;
};

const neutralColorStates = {
  [COLOR_STATE.disabled]: (theme: Theme) => ({
    color: theme.colors.tagNeutralFontDisabled,
    backgroundColor: 'transparent',
    borderColor: theme.colors.tagNeutralOutlinedDisabled,
  }),
  [COLOR_STATE.solid]: (theme: Theme) => ({
    color: theme.colors.tagNeutralSolidFont,
    backgroundColor: theme.colors.tagNeutralSolidBackground,
    borderColor: 'transparent',
  }),
  [COLOR_STATE.outline]: (theme: Theme) => ({
    color: theme.colors.tagNeutralOutlinedFont,
    backgroundColor: 'transparent',
    borderColor: theme.colors.tagNeutralOutlinedBackground,
  }),
};

const primaryColorStates = {
  [COLOR_STATE.disabled]: (theme: Theme) => ({
    color: theme.colors.tagPrimaryFontDisabled,
    backgroundColor: 'transparent',
    borderColor: theme.colors.tagPrimaryOutlinedDisabled,
  }),
  [COLOR_STATE.solid]: (theme: Theme) => ({
    color: theme.colors.tagPrimarySolidFont,
    backgroundColor: theme.colors.tagPrimarySolidBackground,
    borderColor: 'transparent',
  }),
  [COLOR_STATE.outline]: (theme: Theme) => ({
    color: theme.colors.tagPrimaryOutlinedFont,
    backgroundColor: 'transparent',
    borderColor: theme.colors.tagPrimaryOutlinedBackground,
  }),
};

const accentColorStates = {
  [COLOR_STATE.disabled]: (theme: Theme) => ({
    color: theme.colors.tagAccentFontDisabled,
    backgroundColor: 'transparent',
    borderColor: theme.colors.tagAccentOutlinedDisabled,
  }),
  [COLOR_STATE.solid]: (theme: Theme) => ({
    color: theme.colors.tagAccentSolidFont,
    backgroundColor: theme.colors.tagAccentSolidBackground,
    borderColor: 'transparent',
  }),
  [COLOR_STATE.outline]: (theme: Theme) => ({
    color: theme.colors.tagAccentOutlinedFont,
    backgroundColor: 'transparent',
    borderColor: theme.colors.tagAccentOutlinedBackground,
  }),
};

const positiveColorStates = {
  [COLOR_STATE.disabled]: (theme: Theme) => ({
    color: theme.colors.tagPositiveFontDisabled,
    backgroundColor: 'transparent',
    borderColor: theme.colors.tagPositiveOutlinedDisabled,
  }),
  [COLOR_STATE.solid]: (theme: Theme) => ({
    color: theme.colors.tagPositiveSolidFont,
    backgroundColor: theme.colors.tagPositiveSolidBackground,
    borderColor: 'transparent',
  }),
  [COLOR_STATE.outline]: (theme: Theme) => ({
    color: theme.colors.tagPositiveOutlinedFont,
    backgroundColor: 'transparent',
    borderColor: theme.colors.tagPositiveOutlinedBackground,
  }),
};

const warningColorStates = {
  [COLOR_STATE.disabled]: (theme: Theme) => ({
    color: theme.colors.tagWarningFontDisabled,
    backgroundColor: 'transparent',
    borderColor: theme.colors.tagWarningOutlinedDisabled,
  }),
  [COLOR_STATE.solid]: (theme: Theme) => ({
    color: theme.colors.tagWarningSolidFont,
    backgroundColor: theme.colors.tagWarningSolidBackground,
    borderColor: 'transparent',
  }),
  [COLOR_STATE.outline]: (theme: Theme) => ({
    color: theme.colors.tagWarningOutlinedFont,
    backgroundColor: 'transparent',
    borderColor: theme.colors.tagWarningOutlinedBackground,
  }),
};

const negativeColorStates = {
  [COLOR_STATE.disabled]: (theme: Theme) => ({
    color: theme.colors.tagNegativeFontDisabled,
    backgroundColor: 'transparent',
    borderColor: theme.colors.tagNegativeOutlinedDisabled,
  }),
  [COLOR_STATE.solid]: (theme: Theme) => ({
    color: theme.colors.tagNegativeSolidFont,
    backgroundColor: theme.colors.tagNegativeSolidBackground,
    borderColor: 'transparent',
  }),
  [COLOR_STATE.outline]: (theme: Theme) => ({
    color: theme.colors.tagNegativeOutlinedFont,
    backgroundColor: 'transparent',
    borderColor: theme.colors.tagNegativeOutlinedBackground,
  }),
};

const orangeColorStates = {
  [COLOR_STATE.disabled]: (theme: Theme) => ({
    color: theme.colors.tagOrangeFontDisabled,
    backgroundColor: 'transparent',
    borderColor: theme.colors.tagOrangeOutlinedDisabled,
  }),
  [COLOR_STATE.solid]: (theme: Theme) => ({
    color: theme.colors.tagOrangeSolidFont,
    backgroundColor: theme.colors.tagOrangeSolidBackground,
    borderColor: 'transparent',
  }),
  [COLOR_STATE.outline]: (theme: Theme) => ({
    color: theme.colors.tagOrangeOutlinedFont,
    backgroundColor: 'transparent',
    borderColor: theme.colors.tagOrangeOutlinedBackground,
  }),
};

const purpleColorStates = {
  [COLOR_STATE.disabled]: (theme: Theme) => ({
    color: theme.colors.tagPurpleFontDisabled,
    backgroundColor: 'transparent',
    borderColor: theme.colors.tagPurpleOutlinedDisabled,
  }),
  [COLOR_STATE.solid]: (theme: Theme) => ({
    color: theme.colors.tagPurpleSolidFont,
    backgroundColor: theme.colors.tagPurpleSolidBackground,
    borderColor: 'transparent',
  }),
  [COLOR_STATE.outline]: (theme: Theme) => ({
    color: theme.colors.tagPurpleOutlinedFont,
    backgroundColor: 'transparent',
    borderColor: theme.colors.tagPurpleOutlinedBackground,
  }),
};

const brownColorStates = {
  [COLOR_STATE.disabled]: (theme: Theme) => ({
    color: theme.colors.tagBrownFontDisabled,
    backgroundColor: 'transparent',
    borderColor: theme.colors.tagBrownOutlinedDisabled,
  }),
  [COLOR_STATE.solid]: (theme: Theme) => ({
    color: theme.colors.tagBrownSolidFont,
    backgroundColor: theme.colors.tagBrownSolidBackground,
    borderColor: 'transparent',
  }),
  [COLOR_STATE.outline]: (theme: Theme) => ({
    color: theme.colors.tagBrownOutlinedFont,
    backgroundColor: 'transparent',
    borderColor: theme.colors.tagBrownOutlinedBackground,
  }),
};

// const customColorStates = {
//   [COLOR_STATE.disabled]: (theme: Theme, color: string) => ({
//     color: customOnRamp(color, theme.colors.tagFontDisabledRampUnit),
//     backgroundColor: 'transparent',
//     borderColor: customOnRamp(color, theme.colors.tagOutlinedDisabledRampUnit),
//   }),
//   [COLOR_STATE.solid]: (theme: Theme, color: string) => ({
//     color: customOnRamp(color, theme.colors.tagSolidFontRampUnit),
//     backgroundColor: customOnRamp(color, theme.colors.tagSolidRampUnit),
//     borderColor: 'transparent',
//   }),
//   [COLOR_STATE.outline]: (theme: Theme, color: string) => ({
//     color: customOnRamp(color, theme.colors.tagOutlinedFontRampUnit),
//     backgroundColor: 'transparent',
//     borderColor: customOnRamp(color, theme.colors.tagOutlinedRampUnit),
//   }),
// };

// // Probably best to bake this into the theme once we hit our next major.
// const pick = (theme, light, dark) =>
//   theme.name && theme.name.includes('dark') ? dark : light;

const colorMap = {
  [TAG_KIND.neutral]: neutralColorStates,
  [TAG_KIND.primary]: primaryColorStates,
  [TAG_KIND.accent]: accentColorStates,
  [TAG_KIND.positive]: positiveColorStates,
  [TAG_KIND.warning]: warningColorStates,
  [TAG_KIND.negative]: negativeColorStates,
  [TAG_KIND.black]: primaryColorStates,
  [TAG_KIND.blue]: accentColorStates,
  [TAG_KIND.green]: positiveColorStates,
  [TAG_KIND.red]: negativeColorStates,
  [TAG_KIND.yellow]: warningColorStates,
  [TAG_KIND.orange]: orangeColorStates,
  [TAG_KIND.purple]: purpleColorStates,
  [TAG_KIND.brown]: brownColorStates,
  // [TAG_KIND.custom]: customColorStates,
};

const sizeMap = {
  [TAG_SIZE.small]: 24,
  [TAG_SIZE.medium]: 32,
  [TAG_SIZE.large]: 40,
};

const paddingMagnitudeMap = (theme: Theme, size: TAG_SIZE) => {
  switch (size) {
    case TAG_SIZE.small:
      return theme.sizing.scale300;
    case TAG_SIZE.medium:
      return theme.sizing.scale500;
    case TAG_SIZE.large:
      return theme.sizing.scale600;
  }
};

const labelSizeMap = (theme: Theme, size: TAG_SIZE) => {
  switch (size) {
    case TAG_SIZE.small:
      return theme.typography.LabelSmall;
    case TAG_SIZE.medium:
      return theme.typography.LabelMedium;
    case TAG_SIZE.large:
      return theme.typography.LabelLarge;
  }
};

const iconMarginMap = (theme: Theme, size: TAG_SIZE) => {
  switch (size) {
    case TAG_SIZE.small:
      return theme.sizing.scale300;
    case TAG_SIZE.medium:
      return theme.sizing.scale500;
    case TAG_SIZE.large:
      return theme.sizing.scale600;
  }
};
