import React from 'react';
import Button from './Button';
import Modal from './Modal';
import { PortalProvider } from '../../../../src';

const PORTAL_COMPONENTS = {
  TEST_MODAL: Modal,
};

const App = () => (
  <PortalProvider portals={PORTAL_COMPONENTS}>
    <Button>Click me to open modal</Button>
  </PortalProvider>
);

export default App;
