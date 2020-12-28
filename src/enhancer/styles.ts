import { createStyles } from '@gorhom/base-ui';
import { POSITION } from './constants';

export const stylesCreator = createStyles((theme, position: POSITION) => ({
  container: {
    [position === POSITION.start ? 'marginEnd' : 'marginStart']: theme.sizing
      .scale500,
  },
}));
