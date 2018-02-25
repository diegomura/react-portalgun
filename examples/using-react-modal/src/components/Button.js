import React from 'react';
import { withModal } from '../../../../src';

const Button = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
);

export default withModal('TEST_MODAL', 'onClick')(Button);
