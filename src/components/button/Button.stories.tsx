import React from 'react';
import { Text } from 'react-native';
import { action } from '@storybook/addon-actions';
import { text, optionsKnob } from '@storybook/addon-knobs';
import { withKnobs } from '@storybook/addon-ondevice-knobs';

import { storiesOf } from '@storybook/react-native';
import Button from './Button';
import { KIND } from './constants';

const kind = optionsKnob(
  'Kind',
  {
    Primary: KIND.primary,
    Secondary: KIND.secondary,
    Tertiary: KIND.tertiary,
    Minimal: KIND.minimal,
  },
  KIND.primary,
  {
    display: 'inline-radio',
  },
  'kind'
);

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('with text', () => (
    <Button kind={kind} onPress={action('clicked-text')}>
      <Text>{text('Button text', 'Hello Button')}</Text>
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ));
