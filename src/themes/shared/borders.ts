import type { Borders } from '../types';

export const borders: Borders = {
  border100: {
    borderColor: 'hsla(0, 0%, 0%, 0.04)',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  border200: {
    borderColor: 'hsla(0, 0%, 0%, 0.08)',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  border300: {
    borderColor: 'hsla(0, 0%, 0%, 0.12)',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  border400: {
    borderColor: 'hsla(0, 0%, 0%, 0.16)',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  border500: {
    borderColor: 'hsla(0, 0%, 0%, 0.2)',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  border600: {
    borderColor: 'hsla(0, 0%, 0%, 0.24)',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  radius100: 2,
  radius200: 4,
  radius300: 8,
  radius400: 12,
  /** Datepicker (Range), Progress Bar, Slider, Tag */
  useRoundedCorners: true,
  /** Button, ButtonGroup */
  buttonBorderRadius: 0,
  /** Input, Select, Textarea, Checkbox */
  inputBorderRadius: 0,
  /** Popover, Menu, Tooltip */
  popoverBorderRadius: 0,
  /** Card, Datepicker, Modal, Toast, Notification */
  surfaceBorderRadius: 0,
};
