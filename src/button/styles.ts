import { createStyles, Theme } from '@gorhom/base-ui';
import { KIND, SIZE, SHAPE } from './constants';
import type { ButtonOverrides } from './types';

export const stylesCreator = createStyles<ButtonOverrides>(
  (
    theme,
    kind: KIND,
    size: SIZE,
    shape: SHAPE,
    isLoading: boolean,
    isSelected: boolean,
    disabled: boolean
  ) => ({
    baseButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      ...getBorderRadiusStyles(theme, shape, size),
      ...getPaddingStyles(theme, shape, size),
      ...getKindStyles(theme, kind, isLoading, isSelected, disabled),
      ...getShapeStyles(theme, shape, size),
    },
    content: {
      ...getContentStyles(theme, kind, isLoading, isSelected, disabled),
      ...getFontStyles(theme, size),
      lineHeight: getShapeStyles(theme, shape, size).height,
      textAlign: 'center',
    },
    startEnhancer: {},
    endEnhancer: {},
  })
);

const getFontStyles = (theme: Theme, size: SIZE) => {
  switch (size) {
    case SIZE.mini:
      return theme.typography.font150;
    case SIZE.compact:
      return theme.typography.font250;
    case SIZE.large:
      return theme.typography.font450;
    default:
      return theme.typography.font350;
  }
};

const getBorderRadiusStyles = (theme: Theme, shape: SHAPE, size: SIZE) => {
  let value = theme.borders.buttonBorderRadius;

  if (shape === SHAPE.pill) {
    if (size === SIZE.compact) {
      value = 30;
    } else if (size === SIZE.large) {
      value = 42;
    } else {
      value = 38;
    }
  } else if (shape === SHAPE.circle || shape === SHAPE.round) {
    value = 2000;
  }

  return {
    borderTopRightRadius: value,
    borderBottomRightRadius: value,
    borderTopLeftRadius: value,
    borderBottomLeftRadius: value,
  };
};

const getPaddingStyles = (theme: Theme, shape: SHAPE, size: SIZE) => {
  const iconShape =
    shape === SHAPE.square || shape === SHAPE.circle || shape === SHAPE.round;
  switch (size) {
    case SIZE.mini:
      return {
        paddingTop: theme.sizing.scale200,
        paddingBottom: theme.sizing.scale200,
        paddingLeft: iconShape ? theme.sizing.scale200 : theme.sizing.scale300,
        paddingRight: iconShape ? theme.sizing.scale200 : theme.sizing.scale300,
      };
    case SIZE.compact:
      return {
        paddingTop: theme.sizing.scale400,
        paddingBottom: theme.sizing.scale400,
        paddingLeft: iconShape ? theme.sizing.scale400 : theme.sizing.scale500,
        paddingRight: iconShape ? theme.sizing.scale400 : theme.sizing.scale500,
      };
    case SIZE.large:
      return {
        paddingTop: theme.sizing.scale600,
        paddingBottom: theme.sizing.scale600,
        paddingLeft: iconShape ? theme.sizing.scale600 : theme.sizing.scale700,
        paddingRight: iconShape ? theme.sizing.scale600 : theme.sizing.scale700,
      };
    default:
      return {
        paddingTop: theme.sizing.scale550,
        paddingBottom: theme.sizing.scale550,
        paddingLeft: iconShape ? theme.sizing.scale550 : theme.sizing.scale600,
        paddingRight: iconShape ? theme.sizing.scale550 : theme.sizing.scale600,
      };
  }
};

const getShapeStyles = (theme: Theme, shape: SHAPE, size: SIZE) => {
  if (shape === SHAPE.circle || shape === SHAPE.square) {
    let height, width;
    switch (size) {
      case SIZE.mini:
        height = 28;
        width = 28;
        break;
      case SIZE.compact:
        height = 36;
        width = 36;
        break;
      case SIZE.large:
        height = 56;
        width = 56;
        break;
      case SIZE.default:
      default:
        height = 48;
        width = 48;
        break;
    }
    return {
      height,
      width,
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
    };
  } else {
    return {};
  }
};

const getContentStyles = (
  theme: Theme,
  kind: KIND,
  isLoading: boolean,
  isSelected: boolean,
  disabled: boolean
) => {
  if (disabled) {
    return Object.freeze({});
  }
  switch (kind) {
    case KIND.primary:
      if (isSelected) {
        return {
          color: theme.colors.buttonPrimarySelectedText,
        };
      }
      return {
        color: theme.colors.buttonPrimaryText,
      };
    case KIND.secondary:
      if (isSelected) {
        return {
          color: theme.colors.buttonPrimaryText,
        };
      }
      return {
        color: theme.colors.buttonSecondaryText,
      };
    case KIND.tertiary:
      if (isSelected) {
        return {
          color: theme.colors.buttonTertiarySelectedText,
        };
      }
      return {
        color: theme.colors.buttonTertiaryText,
      };
    case KIND.minimal:
      if (isSelected) {
        return {
          color: theme.colors.buttonMinimalSelectedText,
        };
      }
      return {
        color: theme.colors.buttonMinimalText,
      };
    default:
      return Object.freeze({});
  }
};

const getKindStyles = (
  theme: Theme,
  kind: KIND,
  isLoading: boolean,
  isSelected: boolean,
  disabled: boolean
) => {
  if (disabled) {
    return Object.freeze({});
  }
  switch (kind) {
    case KIND.primary:
      if (isSelected) {
        return {
          color: theme.colors.buttonPrimarySelectedText,
          backgroundColor: theme.colors.buttonPrimarySelectedFill,
        };
      }
      return {
        color: theme.colors.buttonPrimaryText,
        backgroundColor: theme.colors.buttonPrimaryFill,
        // ':hover': {
        //   backgroundColor: isLoading
        //     ? theme.colors.buttonPrimaryActive
        //     : theme.colors.buttonPrimaryHover,
        // },
        // ':active': {
        //   backgroundColor: theme.colors.buttonPrimaryActive,
        // },
      };
    case KIND.secondary:
      if (isSelected) {
        return {
          color: theme.colors.buttonPrimaryText,
          backgroundColor: theme.colors.buttonPrimaryFill,
        };
      }
      return {
        color: theme.colors.buttonSecondaryText,
        backgroundColor: theme.colors.buttonSecondaryFill,
        // ':hover': {
        //   backgroundColor: isLoading
        //     ? theme.colors.buttonSecondaryActive
        //     : theme.colors.buttonSecondaryHover,
        // },
        // ':active': {
        //   backgroundColor: theme.colors.buttonSecondaryActive,
        // },
      };
    case KIND.tertiary:
      if (isSelected) {
        return {
          color: theme.colors.buttonTertiarySelectedText,
          backgroundColor: theme.colors.buttonTertiarySelectedFill,
        };
      }
      return {
        color: theme.colors.buttonTertiaryText,
        backgroundColor: theme.colors.buttonTertiaryFill,
        // ':hover': {
        //   backgroundColor: isLoading
        //     ? theme.colors.buttonTertiaryActive
        //     : theme.colors.buttonTertiaryHover,
        // },
        // ':active': {
        //   backgroundColor: theme.colors.buttonTertiaryActive,
        // },
      };
    case KIND.minimal:
      if (isSelected) {
        return {
          color: theme.colors.buttonMinimalSelectedText,
          backgroundColor: theme.colors.buttonMinimalSelectedFill,
        };
      }
      return {
        color: theme.colors.buttonMinimalText,
        backgroundColor: theme.colors.buttonMinimalFill,
        // ':hover': {
        //   backgroundColor: isLoading
        //     ? theme.colors.buttonMinimalActive
        //     : theme.colors.buttonMinimalHover,
        // },
        // ':active': {
        //   backgroundColor: theme.colors.buttonMinimalActive,
        // },
      };
    default:
      return Object.freeze({});
  }
};
