import { mergeDeep } from '../../utilities';
import type { Theme } from '../types';
import { theme } from './theme';

export const createTheme = (overrides: Partial<Theme>): Theme => {
  return mergeDeep(Object.assign({}, overrides), theme);
};
