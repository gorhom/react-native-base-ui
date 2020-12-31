import { createThemedStyles, Theme } from '@gorhom/base-ui';
import type { ViewStyle } from 'react-native';
import { INPUT_ADJOINED, INPUT_SIZE } from './constants';
import type { InputOverrides } from './types';

export const stylesCreator = createThemedStyles<InputOverrides>(
  (
    theme,
    size,
    positive,
    error,
    disabled,
    isFocused,
    adjoined,
    hasIconTrailing
  ) => ({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      borderWidth: 2,
      borderStyle: 'solid',
      borderRadius: theme.borders.inputBorderRadius,
      ...getRootColors(theme, positive, error, disabled, isFocused),
      ...getRootPadding(theme, size, adjoined, hasIconTrailing),
    },
    baseInput: {
      flex: 1,
      flexGrow: 1,
      padding: 0,
      margin: 0,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      outline: 'none',
      ...getInputFont(theme, size),
      ...getInputPadding(theme, size),
      ...getInputColors(theme, disabled),
    },
    startEnhancer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginStart: 0,
      marginEnd: 0,
      ...getInputFont(theme, size),
      ...getInputEnhancerPadding(theme, size),
      ...getInputEnhancerColors(theme, disabled, isFocused, error, positive),
    },
    endEnhancer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginStart: 0,
      marginEnd: 0,
      ...getInputFont(theme, size),
      ...getInputEnhancerPadding(theme, size),
      ...getInputEnhancerColors(theme, disabled, isFocused, error, positive),
    },
    clearIconContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginStart: 0,
      marginEnd: 0,
      ...getInputEnhancerPadding(theme, size),
    },
    clearIcon: {
      ...getIconSize(theme, size),
    },
    maskToggleContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginStart: 0,
      marginEnd: 0,
      ...getInputEnhancerPadding(theme, size),
    },
    maskToggleHideIcon: {
      ...getIconSize(theme, size),
    },
    maskToggleShowIcon: {
      ...getIconSize(theme, size),
    },
  })
);

const getRootColors = (
  theme: Theme,
  positive: boolean,
  error: boolean,
  disabled: boolean,
  isFocused: boolean
): ViewStyle => {
  if (disabled) {
    return {
      borderColor: theme.colors.inputFillDisabled,
      backgroundColor: theme.colors.inputFillDisabled,
    };
  } else if (isFocused) {
    return {
      borderColor: theme.colors.inputBorderFocused,
      backgroundColor: theme.colors.inputFillActive,
    };
  } else if (error) {
    return {
      borderColor: theme.colors.inputBorderError,
      backgroundColor: theme.colors.inputFillError,
    };
  } else if (positive) {
    return {
      borderColor: theme.colors.inputBorderPositive,
      backgroundColor: theme.colors.inputFillPositive,
    };
  } else {
    return {
      borderColor: theme.colors.inputBorder,
      backgroundColor: theme.colors.inputFill,
    };
  }
};

// @TODO
const getRootPadding = (
  theme: Theme,
  size: INPUT_SIZE,
  adjoined: INPUT_ADJOINED,
  hasIconTrailing: boolean
) => {
  const hasStartPadding =
    adjoined === INPUT_ADJOINED.both || adjoined === INPUT_ADJOINED.start;
  const hasEndPadding =
    adjoined === INPUT_ADJOINED.both ||
    adjoined === INPUT_ADJOINED.end ||
    hasIconTrailing;
  return {
    paddingStart: hasStartPadding ? theme.sizing.scale550 / 2 : 0,
    paddingEnd: hasEndPadding ? theme.sizing.scale550 / 2 : 0,
  };
};

const getInputFont = (theme: Theme, size: INPUT_SIZE) => {
  let style;
  switch (size) {
    case INPUT_SIZE.mini:
      style = theme.typography.font100;
      break;

    case INPUT_SIZE.compact:
      style = theme.typography.font200;
      break;

    case INPUT_SIZE.default:
      style = theme.typography.font300;
      break;

    case INPUT_SIZE.large:
      style = theme.typography.font400;
      break;

    default:
      return {};
  }

  return {
    ...style,
    lineHeight: undefined,
  };
};

const getInputPadding = (theme: Theme, size: INPUT_SIZE): ViewStyle => {
  switch (size) {
    case INPUT_SIZE.mini:
      return {
        paddingVertical: theme.sizing.scale100,
        paddingHorizontal: theme.sizing.scale550,
      };

    case INPUT_SIZE.compact:
      return {
        paddingVertical: theme.sizing.scale200,
        paddingHorizontal: theme.sizing.scale550,
      };

    case INPUT_SIZE.default:
      return {
        paddingVertical: theme.sizing.scale400,
        paddingHorizontal: theme.sizing.scale550,
      };

    case INPUT_SIZE.large:
      return {
        paddingVertical: theme.sizing.scale550,
        paddingHorizontal: theme.sizing.scale550,
      };

    default:
      return {};
  }
};

const getInputColors = (theme: Theme, disabled: boolean) => {
  if (disabled) {
    return {
      color: theme.colors.inputTextDisabled,
      caretColor: theme.colors.contentPrimary,
      placeholder: theme.colors.inputPlaceholderDisabled,
    };
  } else {
    return {
      color: theme.colors.contentPrimary,
      caretColor: theme.colors.contentPrimary,
      placeholder: theme.colors.inputPlaceholder,
    };
  }
};

const getInputEnhancerPadding = (theme: Theme, size: INPUT_SIZE): ViewStyle => {
  switch (size) {
    case INPUT_SIZE.mini:
      return {
        paddingVertical: 0,
        paddingHorizontal: theme.sizing.scale400,
      };

    case INPUT_SIZE.compact:
      return {
        paddingVertical: 0,
        paddingHorizontal: theme.sizing.scale400,
      };

    case INPUT_SIZE.default:
      return {
        paddingVertical: 0,
        paddingHorizontal: theme.sizing.scale300,
      };

    case INPUT_SIZE.large:
      return {
        paddingVertical: 0,
        paddingHorizontal: theme.sizing.scale200,
      };

    default:
      return {};
  }
};

const getInputEnhancerColors = (
  theme: Theme,
  disabled: boolean,
  isFocused: boolean,
  error: boolean,
  positive: boolean
) => {
  if (disabled) {
    return {
      color: theme.colors.inputEnhancerTextDisabled,
      backgroundColor: theme.colors.inputFillDisabled,
    };
  } else if (isFocused) {
    return {
      color: theme.colors.contentPrimary,
      backgroundColor: theme.colors.inputFillActive,
    };
  } else if (error) {
    return {
      color: theme.colors.contentPrimary,
      backgroundColor: theme.colors.inputFillError,
    };
  } else if (positive) {
    return {
      color: theme.colors.contentPrimary,
      backgroundColor: theme.colors.inputFillPositive,
    };
  } else {
    return {
      color: theme.colors.contentPrimary,
      backgroundColor: theme.colors.inputFill,
    };
  }
};

const getIconSize = (theme: Theme, size: INPUT_SIZE) => {
  let iconSize: number;
  switch (size) {
    case INPUT_SIZE.mini:
      iconSize = theme.sizing.IconXSmall;
      break;

    case INPUT_SIZE.compact:
      iconSize = theme.sizing.IconSmall;
      break;

    case INPUT_SIZE.large:
      iconSize = theme.sizing.IconLarge;
      break;

    case INPUT_SIZE.default:
    default:
      iconSize = theme.sizing.IconMedium;
      break;
  }

  return {
    fontSize: iconSize,
  };
};
