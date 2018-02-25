import React from 'react';
import { withModal } from '../../../../src';

const Button = ({ onClick }) => (
  <button onClick={onClick}>Click me to open modal</button>
);

export default withModal('TEST_MODAL', 'onClick')(Button);
