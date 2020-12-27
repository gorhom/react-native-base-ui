import React from 'react';
import { storiesOf } from '@storybook/react-native';
import {
  HeadingXXLarge,
  HeadingXLarge,
  HeadingLarge,
  HeadingMedium,
  HeadingSmall,
  HeadingXSmall,
  DisplayLarge,
  DisplayMedium,
  DisplaySmall,
  DisplayXSmall,
  LabelLarge,
  LabelMedium,
  LabelSmall,
  LabelXSmall,
  ParagraphLarge,
  ParagraphMedium,
  ParagraphSmall,
  ParagraphXSmall,
  CaptionMedium,
  CaptionSmall,
} from './Typography';

storiesOf('Typography', module)
  .add('display', () => (
    <>
      <DisplayLarge>Display Large</DisplayLarge>
      <DisplayMedium>Display Medium</DisplayMedium>
      <DisplaySmall>Display Small</DisplaySmall>
      <DisplayXSmall>Display XSmall</DisplayXSmall>
    </>
  ))
  .add('heading', () => (
    <>
      <HeadingXXLarge>Heading XXLarge</HeadingXXLarge>
      <HeadingXLarge>Heading XLarge</HeadingXLarge>
      <HeadingLarge>Heading Large</HeadingLarge>
      <HeadingMedium>Heading Medium</HeadingMedium>
      <HeadingSmall>Heading Small</HeadingSmall>
      <HeadingXSmall>Heading XSmall</HeadingXSmall>
    </>
  ))
  .add('label', () => (
    <>
      <LabelLarge>Label Large</LabelLarge>
      <LabelMedium>Label Medium</LabelMedium>
      <LabelSmall>Label Small</LabelSmall>
      <LabelXSmall>Label XSmall</LabelXSmall>
    </>
  ))
  .add('paragraph', () => (
    <>
      <ParagraphLarge>Paragraph Large</ParagraphLarge>
      <ParagraphMedium>Paragraph Medium</ParagraphMedium>
      <ParagraphSmall>Paragraph Small</ParagraphSmall>
      <ParagraphXSmall>Paragraph XSmall</ParagraphXSmall>
    </>
  ))
  .add('caption', () => (
    <>
      <CaptionMedium>Caption Medium</CaptionMedium>
      <CaptionSmall>Caption Small</CaptionSmall>
    </>
  ));
