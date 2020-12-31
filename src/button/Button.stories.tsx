import React from 'react';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { optionsKnob, boolean } from '@storybook/addon-knobs';
import Button from './Button';
import { BUTTON_KIND, BUTTON_SHAPE, BUTTON_SIZE } from './constants';
import type { ButtonProps } from './types';
import type { Theme } from '../themes';

const props = (): ButtonProps => ({
  kind: optionsKnob(
    'kind',
    {
      primary: BUTTON_KIND.primary,
      secondary: BUTTON_KIND.secondary,
      tertiary: BUTTON_KIND.tertiary,
      minimal: BUTTON_KIND.minimal,
    },
    BUTTON_KIND.primary,
    {
      display: 'inline-radio',
    }
  ),

  shape: optionsKnob(
    'shape',
    {
      default: BUTTON_SHAPE.default,
      pill: BUTTON_SHAPE.pill,
      round: BUTTON_SHAPE.round,
      square: BUTTON_SHAPE.square,
      circle: BUTTON_SHAPE.circle,
    },
    BUTTON_SHAPE.default,
    {
      display: 'inline-radio',
    }
  ),

  size: optionsKnob(
    'size',
    {
      default: BUTTON_SIZE.default,
      large: BUTTON_SIZE.large,
      compact: BUTTON_SIZE.compact,
      mini: BUTTON_SIZE.mini,
    },
    BUTTON_SIZE.default,
    {
      display: 'inline-radio',
    }
  ),
  isLoading: boolean('isLoading', false),
  isSelected: boolean('isSelected', false),
  disabled: boolean('disabled', false),
  onPress: action('clicked'),
});

const DummyEnhancer = '🔥';

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
  ))
  .add('with overrides', () => (
    <Button
      {...props()}
      startEnhancer={DummyEnhancer}
      endEnhancer={DummyEnhancer}
      overrides={{
        baseButton: {
          style: (theme: Theme) => ({
            backgroundColor: theme.colors.backgroundWarning,
          }),
        },
        content: {
          style: (theme: Theme) => ({
            color: theme.colors.inputFillError,
          }),
        },
      }}
    >
      <Text>Hello World</Text>
    </Button>
  ));
