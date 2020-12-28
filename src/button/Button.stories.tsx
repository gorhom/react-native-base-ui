import React from 'react';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { optionsKnob, boolean } from '@storybook/addon-knobs';
import Button from './Button';
import { KIND, SHAPE, SIZE } from './constants';
import type { ButtonProps } from './types';

const props = (): ButtonProps => ({
  kind: optionsKnob(
    'kind',
    {
      primary: KIND.primary,
      secondary: KIND.secondary,
      tertiary: KIND.tertiary,
      minimal: KIND.minimal,
    },
    KIND.primary,
    {
      display: 'inline-radio',
    }
  ),

  shape: optionsKnob(
    'shape',
    {
      default: SHAPE.default,
      pill: SHAPE.pill,
      round: SHAPE.round,
      square: SHAPE.square,
      circle: SHAPE.circle,
    },
    SHAPE.default,
    {
      display: 'inline-radio',
    }
  ),

  size: optionsKnob(
    'size',
    {
      default: SIZE.default,
      large: SIZE.large,
      compact: SIZE.compact,
      mini: SIZE.mini,
    },
    SIZE.default,
    {
      display: 'inline-radio',
    }
  ),
  isLoading: boolean('isLoading', false),
  isSelected: boolean('isSelected', false),
  disabled: boolean('disabled', false),
  onPress: action('clicked'),
});

const DummyEnhancer = () => <Text>🔥</Text>;

storiesOf('Button', module)
  .add('with text', () => (
    <Button {...props()}>
      <Text>Hello World</Text>
    </Button>
  ))
  .add('with start enhancer', () => (
    <Button {...props()} startEnhancer={DummyEnhancer}>
      <Text>Hello World</Text>
    </Button>
  ))
  .add('with end enhancer', () => (
    <Button {...props()} endEnhancer={DummyEnhancer}>
      <Text>Hello World</Text>
    </Button>
  ))
  .add('with start & end enhancers', () => (
    <Button
      {...props()}
      startEnhancer={DummyEnhancer}
      endEnhancer={DummyEnhancer}
    >
      <Text>Hello World</Text>
    </Button>
  ));
