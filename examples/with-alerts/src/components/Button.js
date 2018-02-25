import React from 'react';
import { withModal } from '../../../../src';

const Button = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
);

const mapModalProps = ({ ownProps }) => ({
  title: ownProps.title,
  message: ownProps.message,
});

export default withModal('ALERT', 'onClick', mapModalProps)(Button);
