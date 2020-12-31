import { createThemedStyles, Theme } from '@gorhom/base-ui';
import { BUTTON_KIND, BUTTON_SIZE, BUTTON_SHAPE } from './constants';
import type { ButtonOverrides } from './types';

export const stylesCreator = createThemedStyles<ButtonOverrides>(
  (
    theme,
    kind: BUTTON_KIND,
    size: BUTTON_SIZE,
    shape: BUTTON_SHAPE,
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
    startEnhancer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginEnd: theme.sizing.scale500,
    },
    endEnhancer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginStart: theme.sizing.scale500,
    },
  })
);

const getFontStyles = (theme: Theme, size: BUTTON_SIZE) => {
  switch (size) {
    case BUTTON_SIZE.mini:
      return theme.typography.font150;
    case BUTTON_SIZE.compact:
      return theme.typography.font250;
    case BUTTON_SIZE.large:
      return theme.typography.font450;
    default:
      return theme.typography.font350;
  }
};

const getBorderRadiusStyles = (
  theme: Theme,
  shape: BUTTON_SHAPE,
  size: BUTTON_SIZE
) => {
  let value = theme.borders.buttonBorderRadius;

  if (shape === BUTTON_SHAPE.pill) {
    if (size === BUTTON_SIZE.compact) {
      value = 30;
    } else if (size === BUTTON_SIZE.large) {
      value = 42;
    } else {
      value = 38;
    }
  } else if (shape === BUTTON_SHAPE.circle || shape === BUTTON_SHAPE.round) {
    value = 2000;
  }

  return {
    borderTopRightRadius: value,
    borderBottomRightRadius: value,
    borderTopLeftRadius: value,
    borderBottomLeftRadius: value,
  };
};

const getPaddingStyles = (
  theme: Theme,
  shape: BUTTON_SHAPE,
  size: BUTTON_SIZE
) => {
  const iconShape =
    shape === BUTTON_SHAPE.square ||
    shape === BUTTON_SHAPE.circle ||
    shape === BUTTON_SHAPE.round;
  switch (size) {
    case BUTTON_SIZE.mini:
      return {
        paddingVertical: theme.sizing.scale200,
        paddingHorizontal: iconShape
          ? theme.sizing.scale200
          : theme.sizing.scale300,
      };
    case BUTTON_SIZE.compact:
      return {
        paddingVertical: theme.sizing.scale400,
        paddingHorizontal: iconShape
          ? theme.sizing.scale400
          : theme.sizing.scale500,
      };
    case BUTTON_SIZE.large:
      return {
        paddingVertical: theme.sizing.scale600,
        paddingHorizontal: iconShape
          ? theme.sizing.scale600
          : theme.sizing.scale700,
      };
    default:
      return {
        paddingVertical: theme.sizing.scale550,
        paddingHorizontal: iconShape
          ? theme.sizing.scale550
          : theme.sizing.scale600,
      };
  }
};

const getShapeStyles = (
  theme: Theme,
  shape: BUTTON_SHAPE,
  size: BUTTON_SIZE
) => {
  if (shape === BUTTON_SHAPE.circle || shape === BUTTON_SHAPE.square) {
    let height, width;
    switch (size) {
      case BUTTON_SIZE.mini:
        height = 28;
        width = 28;
        break;
      case BUTTON_SIZE.compact:
        height = 36;
        width = 36;
        break;
      case BUTTON_SIZE.large:
        height = 56;
        width = 56;
        break;
      case BUTTON_SIZE.default:
      default:
        height = 48;
        width = 48;
        break;
    }
    return {
      height,
      width,
      paddingVertical: 0,
      paddingHorizontal: 0,
    };
  } else {
    return {};
  }
};

const getContentStyles = (
  theme: Theme,
  kind: BUTTON_KIND,
  isLoading: boolean,
  isSelected: boolean,
  disabled: boolean
) => {
  if (disabled) {
    return Object.freeze({});
  }
  switch (kind) {
    case BUTTON_KIND.primary:
      if (isSelected) {
        return {
          color: theme.colors.buttonPrimarySelectedText,
        };
      }
      return {
        color: theme.colors.buttonPrimaryText,
      };
    case BUTTON_KIND.secondary:
      if (isSelected) {
        return {
          color: theme.colors.buttonPrimaryText,
        };
      }
      return {
        color: theme.colors.buttonSecondaryText,
      };
    case BUTTON_KIND.tertiary:
      if (isSelected) {
        return {
          color: theme.colors.buttonTertiarySelectedText,
        };
      }
      return {
        color: theme.colors.buttonTertiaryText,
      };
    case BUTTON_KIND.minimal:
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
  kind: BUTTON_KIND,
  isLoading: boolean,
  isSelected: boolean,
  disabled: boolean
) => {
  if (disabled) {
    return Object.freeze({});
  }
  switch (kind) {
    case BUTTON_KIND.primary:
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
    case BUTTON_KIND.secondary:
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
    case BUTTON_KIND.tertiary:
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
    case BUTTON_KIND.minimal:
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
