import { createStyles } from '../themes';
import type { IconOverrides } from './types';

export const stylesCreator = createStyles<IconOverrides>(
  (theme, size, color) => ({
    container: {
      color: color ?? theme.colors.contentPrimary,
      fontFamily: 'baseui-icons',
      fontSize: size,
      // lineHeight: size,
    },
  })
);
