import React, { useEffect, useMemo, useRef } from 'react';
import { Animated, View } from 'react-native';
import { useThemedStyle, useTheme } from '../../hooks';
import { Icon } from '../icon';
import { stylesCreator } from './styles';

import type { SpinnerProps } from './types';

const Spinner = ({ size = 44, activeColor, trackColor }: SpinnerProps) => {
  //#region hooks
  const { animation } = useTheme();
  const styles = useThemedStyle(stylesCreator, size, activeColor, trackColor);
  //#endregion

  //#region animation
  const animatedClock = useRef<Animated.CompositeAnimation>(null);
  const animatedRotateValue = useMemo(() => new Animated.Value(0), []);
  const interpolatedRotateAnimation = useMemo(
    () =>
      animatedRotateValue.interpolate({
        inputRange: [0, 100],
        outputRange: ['0deg', '360deg'],
      }),
    [animatedRotateValue]
  );
  //#endregion

  //#region styles
  const activeContainerStyle = useMemo(
    () => [
      styles.activeContainer,
      {
        transform: [
          {
            translateX: -1 * (size / 2),
          },
          {
            translateY: -1 * (size / 2),
          },
          {
            rotate: interpolatedRotateAnimation,
          },
        ],
      },
    ],
    [size, styles.activeContainer, interpolatedRotateAnimation]
  );
  //#endregion

  useEffect(() => {
    const startAnimation = () => {
      animatedRotateValue.setValue(0);
      // @ts-ignore
      animatedClock.current = Animated.timing(animatedRotateValue, {
        toValue: 100,
        duration: animation.timing1000,
        easing: animation.linearCurve,
        useNativeDriver: true,
      });

      animatedClock.current?.start(startAnimation);
    };
    startAnimation();
    return () => {
      animatedClock.current?.stop();
    };
  }, [animatedRotateValue, animation.timing1000, animation.linearCurve]);

  return (
    <View style={styles.container}>
      <View style={styles.track} />
      <Animated.View style={activeContainerStyle}>
        <Icon name="spinner" size={size} $style={styles.active} />
      </Animated.View>
    </View>
  );
};

export default Spinner;
