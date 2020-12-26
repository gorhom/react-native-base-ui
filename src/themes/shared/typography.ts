import type { Typography, FontTokens, Font } from '../types';

export const defaultFontTokens: FontTokens = {
  primaryFontFamily:
    'system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif',
};

const monoFontFamily = '"Lucida Console", Monaco, monospace';

export const getTypography = (
  fontTokens: FontTokens = defaultFontTokens
): Typography => {
  const font100: Font = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: 20,
  };
  const font150: Font = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 16,
  };
  const font200: Font = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: 14,
    fontWeight: 'normal',
    lineHeight: 20,
  };
  const font250: Font = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 16,
  };
  const font300: Font = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: 16,
    fontWeight: 'normal',
    lineHeight: 24,
  };
  const font350: Font = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 20,
  };
  const font400: Font = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: 18,
    fontWeight: 'normal',
    lineHeight: 28,
  };
  const font450: Font = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: 18,
    fontWeight: 500,
    lineHeight: 24,
  };
  const font550: Font = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: 20,
    fontWeight: 500,
    lineHeight: 28,
  };
  const font650: Font = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: 24,
    fontWeight: 500,
    lineHeight: 32,
  };
  const font750: Font = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: 28,
    fontWeight: 500,
    lineHeight: 36,
  };
  const font850: Font = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: 32,
    fontWeight: 500,
    lineHeight: 40,
  };
  const font950: Font = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: 36,
    fontWeight: 500,
    lineHeight: 44,
  };
  const font1050: Font = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: 40,
    fontWeight: 500,
    lineHeight: 52,
  };
  const font1150: Font = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: 36,
    fontWeight: 500,
    lineHeight: 44,
  };
  const font1250: Font = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: 44,
    fontWeight: 500,
    lineHeight: 52,
  };
  const font1350: Font = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: 52,
    fontWeight: 500,
    lineHeight: 64,
  };
  const font1450: Font = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: 96,
    fontWeight: 500,
    lineHeight: 112,
  };

  return {
    font100,
    font150,
    font200,
    font250,
    font300,
    font350,
    font400,
    font450,
    font550,
    font650,
    font750,
    font850,
    font950,
    font1050,
    font1150,
    font1250,
    font1350,
    font1450,

    ParagraphXSmall: font100,
    ParagraphSmall: font200,
    ParagraphMedium: font300,
    ParagraphLarge: font400,
    LabelXSmall: font150,
    LabelSmall: font250,
    LabelMedium: font350,
    LabelLarge: font450,
    HeadingXSmall: font550,
    HeadingSmall: font650,
    HeadingMedium: font750,
    HeadingLarge: font850,
    HeadingXLarge: font950,
    HeadingXXLarge: font1050,
    DisplayXSmall: font1150,
    DisplaySmall: font1250,
    DisplayMedium: font1350,
    DisplayLarge: font1450,

    MonoParagraphXSmall: { ...font100, fontFamily: monoFontFamily },
    MonoParagraphSmall: { ...font200, fontFamily: monoFontFamily },
    MonoParagraphMedium: { ...font300, fontFamily: monoFontFamily },
    MonoParagraphLarge: { ...font400, fontFamily: monoFontFamily },
    MonoLabelXSmall: { ...font150, fontFamily: monoFontFamily },
    MonoLabelSmall: { ...font250, fontFamily: monoFontFamily },
    MonoLabelMedium: { ...font350, fontFamily: monoFontFamily },
    MonoLabelLarge: { ...font450, fontFamily: monoFontFamily },
    MonoHeadingXSmall: { ...font550, fontFamily: monoFontFamily },
    MonoHeadingSmall: { ...font650, fontFamily: monoFontFamily },
    MonoHeadingMedium: { ...font750, fontFamily: monoFontFamily },
    MonoHeadingLarge: { ...font850, fontFamily: monoFontFamily },
    MonoHeadingXLarge: { ...font950, fontFamily: monoFontFamily },
    MonoHeadingXXLarge: { ...font1050, fontFamily: monoFontFamily },
    MonoDisplayXSmall: { ...font1150, fontFamily: monoFontFamily },
    MonoDisplaySmall: { ...font1250, fontFamily: monoFontFamily },
    MonoDisplayMedium: { ...font1350, fontFamily: monoFontFamily },
    MonoDisplayLarge: { ...font1450, fontFamily: monoFontFamily },
  };
};
