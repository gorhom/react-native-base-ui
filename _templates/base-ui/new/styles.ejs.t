---
to: ./src/<%=name%>/styles.ts
---
import { createStyles } from '../themes';
import type { <%=Name%>Overrides } from './types';

export const stylesCreator = createStyles<<%=Name%>Overrides>(theme => ({
  container: {
    backgroundColor: theme.colors.backgroundPrimary,
  },
}));
