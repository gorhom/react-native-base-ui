import { createStyles } from '@gorhom/base-ui';
import type { ViewStyle } from 'react-native';
import { ADJOINED, SIZE } from './constants';
import type { Theme } from '../themes';
import type { InputOverrides } from './types';

export const stylesCreator = createStyles<InputOverrides>(
  (theme, size, positive, error, disabled, isFocused, adjoined) => ({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      borderWidth: 2,
      borderStyle: 'solid',
      borderRadius: theme.borders.inputBorderRadius,
      ...getRootColors(theme, positive, error, disabled, isFocused),
      ...getRootPadding(theme, adjoined),
    },
    baseInput: {
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
const getRootPadding = (theme: Theme, adjoined: ADJOINED) => ({
  [adjoined === ADJOINED.both
    ? 'paddingHorizontal'
    : adjoined === ADJOINED.left
    ? 'paddingStart'
    : adjoined === ADJOINED.right
    ? 'paddingEnd'
    : 'none']: theme.sizing.scale550,
});

const getInputFont = (theme: Theme, size: SIZE) => {
  let style;
  switch (size) {
    case SIZE.mini:
      style = theme.typography.font100;
      break;

    case SIZE.compact:
      style = theme.typography.font200;
      break;

    case SIZE.default:
      style = theme.typography.font300;
      break;

    case SIZE.large:
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

const getInputPadding = (theme: Theme, size: SIZE): ViewStyle => {
  switch (size) {
    case SIZE.mini:
      return {
        paddingVertical: theme.sizing.scale100,
        paddingHorizontal: theme.sizing.scale550,
      };

    case SIZE.compact:
      return {
        paddingVertical: theme.sizing.scale200,
        paddingHorizontal: theme.sizing.scale550,
      };

    case SIZE.default:
      return {
        paddingVertical: theme.sizing.scale400,
        paddingHorizontal: theme.sizing.scale550,
      };

    case SIZE.large:
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

const getInputEnhancerPadding = (theme: Theme, size: SIZE): ViewStyle => {
  switch (size) {
    case SIZE.mini:
      return {
        paddingHorizontal: theme.sizing.scale400,
      };

    case SIZE.compact:
      return {
        paddingHorizontal: theme.sizing.scale400,
      };

    case SIZE.default:
      return {
        paddingHorizontal: theme.sizing.scale300,
      };

    case SIZE.large:
      return {
        paddingHorizontal: theme.sizing.scale200,
      };

    default:
      return {};
  }
};

const getInputEnhancerColors = (
  theme: Theme,
  disabled,
  isFocused,
  error,
  positive
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
