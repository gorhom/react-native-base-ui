import { createStyles } from '../themes';
import type { IconOverrides } from './types';

export const stylesCreator = createStyles<IconOverrides>(theme => ({
  container: {
    backgroundColor: theme.colors.backgroundPrimary,
  },
}));
