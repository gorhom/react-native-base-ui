import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { color, number } from '@storybook/addon-knobs';
import Spinner from './Spinner';
import type { SpinnerProps } from './types';

const props = (): SpinnerProps => ({
  size: number('size', 44),
  // @ts-ignore
  activeColor: color('activeColor', undefined),
  // @ts-ignore
  trackColor: color('trackColor', undefined),
});

storiesOf('Spinner', module).add('default', () => <Spinner {...props()} />);
