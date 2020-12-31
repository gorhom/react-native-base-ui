---
to: ./src/<%=name%>/types.d.ts
---
import type { ViewProps, ViewStyle } from 'react-native';
import type { BaseUIComponent, Override } from '../types';
import type { <%=name.toUpperCase()%>_TYPE } from './constants';

export interface <%=Name%>Overrides {
  [key: string]: Override<any>;
  container?: Override<ViewProps>;
}

export interface <%=Name%>Props extends BaseUIComponent<<%=Name%>Overrides, ViewStyle> {
  /**
   * <%=Name%> type.
   * @default <%=name.toUpperCase()%>_TYPE.type1
   */
  type?: <%=name.toUpperCase()%>_TYPE;
}
