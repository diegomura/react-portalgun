import React from 'react';
import { withPortal } from '../../../../src';

const Button = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
);

const mapPropsToPortal = ({ ownProps }) => ({
  title: ownProps.title,
  message: ownProps.message,
});

export default withPortal('ALERT', 'onClick', mapPropsToPortal)(Button);
