import React from 'react';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { optionsKnob, boolean } from '@storybook/addon-knobs';
import Input from './Input';
import { INPUT_SIZE } from './constants';
import type { InputProps } from './types';

const createProps = (): InputProps => ({
  size: optionsKnob(
    'size',
    {
      default: INPUT_SIZE.default,
      large: INPUT_SIZE.large,
      compact: INPUT_SIZE.compact,
      mini: INPUT_SIZE.mini,
    },
    INPUT_SIZE.default,
    {
      display: 'inline-radio',
    }
  ),
  positive: boolean('positive', false),
  error: boolean('error', false),
  disabled: boolean('disabled', false),
  clearable: boolean('clearable', false),

  // actions
  onChangeText: action('on change text'),
  onFocus: action('on focus'),
  onBlur: action('on blur'),
});

const DummyEnhancer = (props: any) => <Text {...props}>🔥</Text>;

storiesOf('Input', module)
  .add('default', () => <Input {...createProps()} />)
  .add('with placeholder', () => (
    <Input placeholder="Hello World" {...createProps()} />
  ))
  .add('with start enhancer', () => (
    <Input {...createProps()} startEnhancer={DummyEnhancer} />
  ))
  .add('with end enhancer', () => (
    <Input {...createProps()} endEnhancer={DummyEnhancer} />
  ))
  .add('with start & end enhancers', () => (
    <Input
      {...createProps()}
      startEnhancer={DummyEnhancer}
      endEnhancer={DummyEnhancer}
    />
  ));
