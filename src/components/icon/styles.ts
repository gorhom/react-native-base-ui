import { createThemedStyles } from '../../themes';
import type { IconOverrides } from './types';

export const stylesCreator = createThemedStyles<IconOverrides>(
  (theme, size, color) => ({
    container: {
      alignSelf: 'center',
      alignContent: 'center',
      alignItems: 'center',
      textAlignVertical: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      color: color ?? theme.colors.contentPrimary,
      fontFamily: 'baseui-icons',
      fontSize: size,
      includeFontPadding: false,
      // lineHeight: size,
    },
  })
);
