import React from 'react';
import Button from './Button';
import Alert from './Alert';
import { ModalProvider } from '../../../../src';

const MODAL_COMPONENTS = { ALERT: Alert };

const App = () => (
  <ModalProvider modals={MODAL_COMPONENTS}>
    <Button title="Parmenides" message="Thinking and being is the same thing">
      Parmenides
    </Button>
    <Button
      title="Aristotle"
      message="The whole is greater than the sum of its parts"
    >
      Aristotle
    </Button>
  </ModalProvider>
);

export default App;
