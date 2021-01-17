import React, { cloneElement } from 'react';
import { Text } from 'react-native';
import type { ButtonContentProps } from './types';

const ButtonContent = ({ style, children: Children }: ButtonContentProps) => {
  if (Children === null || Children === undefined) {
    return null;
  }

  if (typeof Children === 'function') {
    return Children({ style });
  }

  if (typeof Children === 'object') {
    //@ts-ignore
    return cloneElement(Children, {
      //@ts-ignore
      ...Children.props,
      //@ts-ignore
      style: [style, Children.props.style],
    });
  }

  if (typeof Children === 'string') {
    return <Text style={style}>{Children}</Text>;
  }

  return null;
};

export default ButtonContent;
