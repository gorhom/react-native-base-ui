import type { FC, ReactNode } from 'react';
import type { POSITION } from './constants';

export interface EnhancerProps {
  component?: null | ReactNode | FC;
  position: keyof typeof POSITION;
}
