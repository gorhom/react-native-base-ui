import { createThemedStyles } from '../themes';
import type { TypographyOverrides } from './types';

export const stylesCreator = createThemedStyles<TypographyOverrides>(
  (theme, font: string, color: string) => ({
    container: {
      // @ts-ignore
      color: color in theme.colors ? theme.colors[color] : color,
      ...(font in theme.typography
        ? //@ts-ignore
          theme.typography[font]
        : theme.typography.ParagraphMedium),
    },
  })
);
