---
to: ./src/<%=name%>/<%=Name%>.stories.tsx
---
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import <%=Name%> from './<%=Name%>';

storiesOf('<%=Name%>', module).add('default', () => <<%=Name%> />);
