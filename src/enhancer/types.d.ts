import type { FC, ReactNode } from 'react';

export interface EnhancerProps {
  component?: null | ReactNode | FC;
  position: 'start' | 'end';
}
