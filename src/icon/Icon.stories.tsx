import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { select, color, number } from '@storybook/addon-knobs';
import Icon from './Icon';
import type { IconProps, NAME } from './types';
import { ICON_SETS } from './constants';

const getProps = (): IconProps => ({
  name: select<NAME>(
    'name',
    Object.keys(ICON_SETS).reduce((result, key) => {
      // @ts-ignore
      result[key] = key;
      return result;
    }, {}),
    'show'
  ),
  size: number('size', 46),
  // @ts-ignore
  color: color('color', undefined),
});

storiesOf('Icon', module)
  .add('default', () => <Icon {...getProps()} />)
  .add('all', () => (
    <>
      {Object.keys(ICON_SETS).map((key: any) => (
        <View style={styles.container}>
          <Text style={styles.text}>{key}</Text>
          <Icon name={key} />
        </View>
      ))}
    </>
  ));

const styles = StyleSheet.create({
  container: {
    width: 200,
    alignContent: 'space-between',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    color: 'white',
  },
});
