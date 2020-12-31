---
to: ./src/<%=name%>/<%=Name%>.tsx
---
import React from 'react';
import { View } from 'react-native';
import { useThemedStyle, useOverrideComponent } from '../hooks';
import { <%=name.toUpperCase()%>_TYPE } from './constants';
import { stylesCreator } from './styles';

import type { <%=Name%>Props } from './types';

const <%=Name%> = ({ overrides, type = <%=name.toUpperCase()%>_TYPE.type1 }: <%=Name%>Props) => {
  //#region styles
  const styles = useThemedStyle(stylesCreator);
  //#endregion

  //#region override components
  const [RootView, rootViewProps] = useOverrideComponent(
    View,
    styles.container,
    overrides?.container
  );
  //#endregion

  console.log('type', type);

  return <RootView {...rootViewProps}>{/* IMPLEMENT COMPONENT */}</RootView>;
};

export default <%=Name%>;
