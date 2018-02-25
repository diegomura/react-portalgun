import React from 'react';
import Button from './Button';
import Alert from './Alert';
import { PortalProvider } from '../../../../src';

const PORTAL_COMPONENTS = { ALERT: Alert };

const App = () => (
  <PortalProvider portals={PORTAL_COMPONENTS}>
    <Button title="Parmenides" message="Thinking and being is the same thing">
      Parmenides
    </Button>
    <Button
      title="Aristotle"
      message="The whole is greater than the sum of its parts"
    >
      Aristotle
    </Button>
  </PortalProvider>
);

export default App;
