---
to: ./src/<%=name%>/types.d.ts
---
import type { ViewProps } from 'react-native';
import type { Override } from '../types';
import type { TYPE } from './constants';

export interface <%=Name%>Overrides {
  [key: string]: Override<any>;
  container?: Override<ViewProps>;
}

export interface <%=Name%>Props {
  /**
   * <%=Name%> type.
   * @default TYPE.type1
   */
  type?: TYPE;

  /**
   * Defines the <%=name%> overrides.
   * @default undefined
   */
  overrides?: <%=Name%>Overrides;
}
