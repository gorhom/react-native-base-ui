import { createStyles } from '@gorhom/base-ui';

export const stylesCreator = createStyles(
  (theme, font: string, color: string) => ({
    text: {
      // @ts-ignore
      color: color in theme.colors ? theme.colors[color] : color,
      ...(font in theme.typography
        ? //@ts-ignore
          theme.typography[font]
        : theme.typography.ParagraphMedium),
    },
  })
);
