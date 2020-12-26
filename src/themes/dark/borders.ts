import { mergeDeep } from '../../utilities';
import { borders as sharedBorders } from '../shared/borders';
import type { Borders } from '../types';

export const borders: Borders = mergeDeep(
  {
    border100: {
      borderColor: 'hsla(0, 0%, 100%, 0.04)',
    },
    border200: {
      borderColor: 'hsla(0, 0%, 100%, 0.08)',
    },
    border300: {
      borderColor: 'hsla(0, 0%, 100%, 0.12)',
    },
    border400: {
      borderColor: 'hsla(0, 0%, 100%, 0.16)',
    },
    border500: {
      borderColor: 'hsla(0, 0%, 100%, 0.2)',
    },
    border600: {
      borderColor: 'hsla(0, 0%, 100%, 0.24)',
    },
  },
  sharedBorders
);
