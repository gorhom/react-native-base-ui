import { createThemedStyles } from '@gorhom/base-ui';
import type { IconOverrides } from './types';

export const stylesCreator = createThemedStyles<IconOverrides>(
  (theme, size, color) => ({
    container: {
      color: color ?? theme.colors.contentPrimary,
      fontFamily: 'baseui-icons',
      fontSize: size,
      // lineHeight: size,
    },
  })
);
