import { createStyles } from '@gorhom/base-ui';

export const stylesCreator = createStyles(theme => ({
  startContainer: {
    marginEnd: theme.sizing.scale500,
  },
  endContainer: {
    marginStart: theme.sizing.scale500,
  },
}));
