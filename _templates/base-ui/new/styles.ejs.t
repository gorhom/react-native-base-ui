---
to: ./src/<%=name%>/styles.ts
---
import { createThemedStyles } from '../themes';
import type { <%=Name%>Overrides } from './types';

export const stylesCreator = createThemedStyles<<%=Name%>Overrides>(theme => ({
  container: {
    backgroundColor: theme.colors.backgroundPrimary,
  },
}));
