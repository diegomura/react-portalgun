import React from 'react';
import { withPortal } from '../../../../src';

const Button = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
);

export default withPortal('TEST_MODAL', 'onClick')(Button);
