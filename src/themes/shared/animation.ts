import { Easing } from 'react-native';
import type { Animation } from '../types';

export const animation: Animation = {
  timing100: 100,
  timing200: 200,
  timing300: 300,
  timing400: 400,
  timing500: 500,
  timing600: 600,
  timing700: 700,
  timing800: 800,
  timing900: 900,
  timing1000: 1000,
  easeInCurve: Easing.bezier(0.8, 0.2, 0.6, 1),
  easeOutCurve: Easing.bezier(0.2, 0.8, 0.4, 1),
  easeInOutCurve: Easing.bezier(0.4, 0, 0.2, 1),
  easeInQuinticCurve: Easing.bezier(0.755, 0.05, 0.855, 0.06),
  easeOutQuinticCurve: Easing.bezier(0.23, 1, 0.32, 1),
  easeInOutQuinticCurve: Easing.bezier(0.86, 0, 0.07, 1),
  linearCurve: Easing.bezier(0, 0, 1, 1),
};
