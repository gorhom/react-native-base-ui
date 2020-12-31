import React, { FC, useMemo } from 'react';
import { Text as RNText } from 'react-native';
import { useThemedStyle, useOverrideComponent } from '../hooks';
import { stylesCreator } from './styles';
import { FONT, COLOR } from './constants';

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
  FONT.DisplayLarge,
  COLOR.contentPrimary
);
DisplayLarge.displayName = FONT.DisplayLarge;
export const DisplayMedium = createTypography(
  FONT.DisplayMedium,
  COLOR.contentPrimary
);
DisplayMedium.displayName = FONT.DisplayMedium;
export const DisplaySmall = createTypography(
  FONT.DisplaySmall,
  COLOR.contentPrimary
);
DisplaySmall.displayName = FONT.DisplaySmall;
export const DisplayXSmall = createTypography(
  FONT.DisplayXSmall,
  COLOR.contentPrimary
);
DisplayXSmall.displayName = FONT.DisplayXSmall;
//#endregion

//#region heading
export const HeadingXXLarge = createTypography(
  FONT.HeadingXXLarge,
  COLOR.contentPrimary
);
HeadingXXLarge.displayName = FONT.HeadingXXLarge;
export const HeadingXLarge = createTypography(
  FONT.HeadingXLarge,
  COLOR.contentPrimary
);
HeadingXLarge.displayName = FONT.HeadingXLarge;
export const HeadingLarge = createTypography(
  FONT.HeadingLarge,
  COLOR.contentPrimary
);
HeadingLarge.displayName = FONT.HeadingLarge;
export const HeadingMedium = createTypography(
  FONT.HeadingMedium,
  COLOR.contentPrimary
);
HeadingMedium.displayName = FONT.HeadingMedium;
export const HeadingSmall = createTypography(
  FONT.HeadingSmall,
  COLOR.contentPrimary
);
HeadingSmall.displayName = FONT.HeadingSmall;
export const HeadingXSmall = createTypography(
  FONT.HeadingXSmall,
  COLOR.contentPrimary
);
HeadingXSmall.displayName = FONT.HeadingXSmall;
//#endregion

//#region label
export const LabelLarge = createTypography(
  FONT.LabelLarge,
  COLOR.contentPrimary
);
LabelLarge.displayName = FONT.LabelLarge;
export const LabelMedium = createTypography(
  FONT.LabelMedium,
  COLOR.contentPrimary
);
LabelMedium.displayName = FONT.LabelMedium;
export const LabelSmall = createTypography(
  FONT.LabelSmall,
  COLOR.contentPrimary
);
LabelSmall.displayName = FONT.LabelSmall;
export const LabelXSmall = createTypography(
  FONT.LabelXSmall,
  COLOR.contentPrimary
);
LabelXSmall.displayName = FONT.LabelXSmall;
//#endregion

//#region paragraph
export const ParagraphLarge = createTypography(
  FONT.ParagraphLarge,
  COLOR.contentPrimary
);
ParagraphLarge.displayName = FONT.ParagraphLarge;
export const ParagraphMedium = createTypography(
  FONT.ParagraphMedium,
  COLOR.contentPrimary
);
ParagraphLarge.displayName = FONT.ParagraphMedium;
export const ParagraphSmall = createTypography(
  FONT.ParagraphSmall,
  COLOR.contentPrimary
);
ParagraphSmall.displayName = FONT.ParagraphSmall;
export const ParagraphXSmall = createTypography(
  FONT.ParagraphXSmall,
  COLOR.contentPrimary
);
ParagraphXSmall.displayName = FONT.ParagraphXSmall;
//#endregion

//#region caption
export const CaptionMedium = createTypography(
  FONT.ParagraphXSmall,
  COLOR.contentSecondary
);
CaptionMedium.displayName = FONT.CaptionMedium;
export const CaptionSmall = createTypography(
  FONT.LabelXSmall,
  COLOR.contentSecondary
);
CaptionSmall.displayName = FONT.CaptionSmall;
//#endregion
