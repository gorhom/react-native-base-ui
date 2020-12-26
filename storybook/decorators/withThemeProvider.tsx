import React, { FC } from 'react';
import { ThemeProvider } from '@gorhom/base-ui';

export const withThemeProvider = (Story: FC) => (
  <ThemeProvider>
    <Story />
  </ThemeProvider>
);
