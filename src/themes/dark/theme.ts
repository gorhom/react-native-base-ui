import type { Theme } from '../types';
import { colorTokens } from './colorTokens';
import { getComponentColorTokens } from './componentColorTokens';
import { getSemanticColorTokens } from './semanticColorTokens';
import { borders } from './borders';
import { animation } from '../shared/animation';
import { sizing } from '../shared/sizing';
import { getTypography } from '../shared/typography';

export const theme: Theme = {
  name: 'dark',
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
