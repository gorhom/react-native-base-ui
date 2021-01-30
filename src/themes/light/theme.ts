import type { Theme } from '../types';
import { colorTokens } from './colorTokens';
import { getComponentColorTokens } from './componentColorTokens';
import { getSemanticColorTokens } from './semanticColorTokens';
import { animation } from '../shared/animation';
import { sizing } from '../shared/sizing';
import { borders } from '../shared/borders';
import { getTypography } from '../shared/typography';

export const theme: Theme = {
  name: 'light',
  animation,
  colors: {
    ...colorTokens,
    ...getComponentColorTokens(),
    ...getSemanticColorTokens(),
  },
  borders,
  sizing,
  typography: getTypography(),
};
