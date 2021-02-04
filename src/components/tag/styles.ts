import { createThemedStyles } from '../../themes';
import type { TagOverrides } from './types';

export const stylesCreator = createThemedStyles<TagOverrides>(theme => ({
  container: {
    backgroundColor: theme.colors.backgroundPrimary,
  },
}));
