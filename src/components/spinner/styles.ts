import { createThemedStyles } from '../../themes';
import type { SpinnerOverrides } from './types';

export const stylesCreator = createThemedStyles<SpinnerOverrides>(
  (theme, size: number, activeColor?: string, trackColor?: string) => ({
    container: {
      width: size,
      height: size,
      justifyContent: 'center',
      alignItems: 'center',
    },
    track: {
      width: size / 2 + (size / 100) * 12,
      height: size / 2 + (size / 100) * 12,
      borderWidth: (size / 100) * 6,
      borderRadius: size,
      borderColor: trackColor || theme.colors.backgroundTertiary,
    },
    activeContainer: {
      position: 'absolute',
      top: size / 2,
      left: size / 2,
      width: size,
      height: size,
    },
    active: {
      width: size,
      height: size,
      color: activeColor || theme.colors.contentAccent,
    },
  })
);
