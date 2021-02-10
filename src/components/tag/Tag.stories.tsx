import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { optionsKnob, boolean, text } from '@storybook/addon-knobs';
import { Tag } from './Tag';
import { TAG_KIND, TAG_SIZE, TAG_VARIANT } from './constants';
import type { TagProps } from './types';

const props = (): TagProps => ({
  kind: optionsKnob(
    'kind',
    {
      neutral: TAG_KIND.neutral,
      primary: TAG_KIND.primary,
      accent: TAG_KIND.accent,
      positive: TAG_KIND.positive,
      warning: TAG_KIND.warning,
      negative: TAG_KIND.negative,
      black: TAG_KIND.black,
      blue: TAG_KIND.blue,
      green: TAG_KIND.green,
      red: TAG_KIND.red,
      yellow: TAG_KIND.yellow,
      orange: TAG_KIND.orange,
      purple: TAG_KIND.purple,
      brown: TAG_KIND.brown,
    },
    TAG_KIND.primary,
    {
      display: 'select',
    }
  ),

  size: optionsKnob(
    'size',
    {
      small: TAG_SIZE.small,
      medium: TAG_SIZE.medium,
      large: TAG_SIZE.large,
    },
    TAG_SIZE.small,
    {
      display: 'inline-radio',
    }
  ),

  variant: optionsKnob(
    'variant',
    {
      light: TAG_VARIANT.light,
      outlined: TAG_VARIANT.outlined,
      solid: TAG_VARIANT.solid,
    },
    TAG_VARIANT.light,
    {
      display: 'inline-radio',
    }
  ),

  closeable: boolean('closeable', true),

  disabled: boolean('disabled', false),

  children: text('children', 'this is a tag'),

  onPress: action('clicked'),
});

storiesOf('Tag', module)
  .add('default', () => <Tag {...props()} />)
  .add('all kinds', () => (
    <>
      {Object.keys(TAG_KIND).map(item => (
        <Tag key={item} kind={item as TAG_KIND} children={item} />
      ))}
    </>
  ))
  .add('all size', () => (
    <>
      {Object.keys(TAG_SIZE).map(item => (
        <Tag key={item} size={item as TAG_SIZE} children={item} />
      ))}
    </>
  ));
