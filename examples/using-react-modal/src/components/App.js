import React from 'react';
import Button from './Button';
import Modal from './Modal';
import { ModalProvider } from '../../../../src';

const MODAL_COMPONENTS = {
  TEST_MODAL: Modal,
};

const App = () => (
  <ModalProvider modals={MODAL_COMPONENTS}>
    <Button>Click me</Button>
  </ModalProvider>
);

export default App;
