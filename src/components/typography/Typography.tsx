import React, { FC, useMemo } from 'react';
import { Text as RNText } from 'react-native';
import { useThemedStyle, useOverrideComponent } from '../../hooks';
import { stylesCreator } from './styles';
import { TYPOGRAPHY_FONT, TYPOGRAPHY_COLOR } from './constants';

import type { TypographyProps } from './types';

const createTypography = (
  _font: string,
  _color: string
): FC<TypographyProps> => ({
  overrides,
  font: _providedFont,
  color: _providedColor,
  ...rest
}) => {
  //#region variables
  const font = useMemo(() => (_providedFont ? _providedFont : _font), [
    _providedFont,
  ]);
  const color = useMemo(() => (_providedColor ? _providedColor : _color), [
    _providedColor,
  ]);
  //#endregion

  //#region styles
  const styles = useThemedStyle(stylesCreator, font, color);
  //#endregion

  const [Container, containerProps] = useOverrideComponent(
    RNText,
    styles.container,
    overrides?.container
  );

  return <Container {...rest} {...containerProps} />;
};

//#region display
export const DisplayLarge = createTypography(
  TYPOGRAPHY_FONT.DisplayLarge,
  TYPOGRAPHY_COLOR.contentPrimary
);
DisplayLarge.displayName = TYPOGRAPHY_FONT.DisplayLarge;
export const DisplayMedium = createTypography(
  TYPOGRAPHY_FONT.DisplayMedium,
  TYPOGRAPHY_COLOR.contentPrimary
);
DisplayMedium.displayName = TYPOGRAPHY_FONT.DisplayMedium;
export const DisplaySmall = createTypography(
  TYPOGRAPHY_FONT.DisplaySmall,
  TYPOGRAPHY_COLOR.contentPrimary
);
DisplaySmall.displayName = TYPOGRAPHY_FONT.DisplaySmall;
export const DisplayXSmall = createTypography(
  TYPOGRAPHY_FONT.DisplayXSmall,
  TYPOGRAPHY_COLOR.contentPrimary
);
DisplayXSmall.displayName = TYPOGRAPHY_FONT.DisplayXSmall;
//#endregion

//#region heading
export const HeadingXXLarge = createTypography(
  TYPOGRAPHY_FONT.HeadingXXLarge,
  TYPOGRAPHY_COLOR.contentPrimary
);
HeadingXXLarge.displayName = TYPOGRAPHY_FONT.HeadingXXLarge;
export const HeadingXLarge = createTypography(
  TYPOGRAPHY_FONT.HeadingXLarge,
  TYPOGRAPHY_COLOR.contentPrimary
);
HeadingXLarge.displayName = TYPOGRAPHY_FONT.HeadingXLarge;
export const HeadingLarge = createTypography(
  TYPOGRAPHY_FONT.HeadingLarge,
  TYPOGRAPHY_COLOR.contentPrimary
);
HeadingLarge.displayName = TYPOGRAPHY_FONT.HeadingLarge;
export const HeadingMedium = createTypography(
  TYPOGRAPHY_FONT.HeadingMedium,
  TYPOGRAPHY_COLOR.contentPrimary
);
HeadingMedium.displayName = TYPOGRAPHY_FONT.HeadingMedium;
export const HeadingSmall = createTypography(
  TYPOGRAPHY_FONT.HeadingSmall,
  TYPOGRAPHY_COLOR.contentPrimary
);
HeadingSmall.displayName = TYPOGRAPHY_FONT.HeadingSmall;
export const HeadingXSmall = createTypography(
  TYPOGRAPHY_FONT.HeadingXSmall,
  TYPOGRAPHY_COLOR.contentPrimary
);
HeadingXSmall.displayName = TYPOGRAPHY_FONT.HeadingXSmall;
//#endregion

//#region label
export const LabelLarge = createTypography(
  TYPOGRAPHY_FONT.LabelLarge,
  TYPOGRAPHY_COLOR.contentPrimary
);
LabelLarge.displayName = TYPOGRAPHY_FONT.LabelLarge;
export const LabelMedium = createTypography(
  TYPOGRAPHY_FONT.LabelMedium,
  TYPOGRAPHY_COLOR.contentPrimary
);
LabelMedium.displayName = TYPOGRAPHY_FONT.LabelMedium;
export const LabelSmall = createTypography(
  TYPOGRAPHY_FONT.LabelSmall,
  TYPOGRAPHY_COLOR.contentPrimary
);
LabelSmall.displayName = TYPOGRAPHY_FONT.LabelSmall;
export const LabelXSmall = createTypography(
  TYPOGRAPHY_FONT.LabelXSmall,
  TYPOGRAPHY_COLOR.contentPrimary
);
LabelXSmall.displayName = TYPOGRAPHY_FONT.LabelXSmall;
//#endregion

//#region paragraph
export const ParagraphLarge = createTypography(
  TYPOGRAPHY_FONT.ParagraphLarge,
  TYPOGRAPHY_COLOR.contentPrimary
);
ParagraphLarge.displayName = TYPOGRAPHY_FONT.ParagraphLarge;
export const ParagraphMedium = createTypography(
  TYPOGRAPHY_FONT.ParagraphMedium,
  TYPOGRAPHY_COLOR.contentPrimary
);
ParagraphLarge.displayName = TYPOGRAPHY_FONT.ParagraphMedium;
export const ParagraphSmall = createTypography(
  TYPOGRAPHY_FONT.ParagraphSmall,
  TYPOGRAPHY_COLOR.contentPrimary
);
ParagraphSmall.displayName = TYPOGRAPHY_FONT.ParagraphSmall;
export const ParagraphXSmall = createTypography(
  TYPOGRAPHY_FONT.ParagraphXSmall,
  TYPOGRAPHY_COLOR.contentPrimary
);
ParagraphXSmall.displayName = TYPOGRAPHY_FONT.ParagraphXSmall;
//#endregion

//#region caption
export const CaptionMedium = createTypography(
  TYPOGRAPHY_FONT.ParagraphXSmall,
  TYPOGRAPHY_COLOR.contentSecondary
);
CaptionMedium.displayName = TYPOGRAPHY_FONT.CaptionMedium;
export const CaptionSmall = createTypography(
  TYPOGRAPHY_FONT.LabelXSmall,
  TYPOGRAPHY_COLOR.contentSecondary
);
CaptionSmall.displayName = TYPOGRAPHY_FONT.CaptionSmall;
//#endregion
