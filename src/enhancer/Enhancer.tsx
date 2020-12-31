import React, { cloneElement } from 'react';
import { Text } from 'react-native';
import { styles } from './styles';
import type { EnhancerProps } from './types';

const Enhancer = ({ children: Component = null, style }: EnhancerProps) => {
  //#region render
  if (Component === null || Component === undefined) {
    return null;
  }

  if (typeof Component === 'string') {
    return <Text style={[styles.container, style]}>{Component}</Text>;
  }

  if (typeof Component === 'object') {
    //@ts-ignore
    return cloneElement(Component, {
      //@ts-ignore
      ...Component.props,
      //@ts-ignore
      style: [styles.container, style, Component.props.style],
    });
  }

  return (
    <Component
      // @ts-ignore
      style={[styles.container, style]}
    />
  );
  //#endregion
};

Enhancer.displayName = 'Enhancer';

export default Enhancer;
