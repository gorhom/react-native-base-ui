import React, { memo } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useThemedStyle, useOverrideComponent } from '../../hooks';
import { Icon } from '../icon';
import { TAG_KIND, TAG_VARIANT, TAG_SIZE } from './constants';
import { stylesCreator } from './styles';

import type { TagProps } from './types';

const TagComponent = ({
  overrides,
  kind = TAG_KIND.primary,
  variant = TAG_VARIANT.light,
  size = TAG_SIZE.small,
  disabled = false,
  closeable = true,
  children = '',
  onPress,
}: TagProps) => {
  //#region styles
  const styles = useThemedStyle(
    stylesCreator,
    kind,
    variant,
    size,
    disabled,
    onPress !== null && onPress !== undefined
  );
  //#endregion

  //#region override components
  const [ButtonView, buttonViewProps] = useOverrideComponent(
    TouchableOpacity,
    styles.button,
    overrides?.button
  );
  const [RootView, rootViewProps] = useOverrideComponent(
    View,
    styles.container,
    overrides?.container
  );
  const [Label, labelProps] = useOverrideComponent(
    Text,
    styles.label,
    overrides?.label
  );
  //#endregion

  //#region renders
  const renderContent = () => (
    <RootView {...rootViewProps}>
      <Label {...labelProps}>{children}</Label>
      {closeable && (
        <View style={styles.iconContainer}>
          <Icon $style={styles.icon} name="delete" />
        </View>
      )}
    </RootView>
  );
  return onPress ? (
    <ButtonView onPress={onPress} {...buttonViewProps}>
      {renderContent()}
    </ButtonView>
  ) : (
    renderContent()
  );
  //#endregion
};

export const Tag = memo(TagComponent);
