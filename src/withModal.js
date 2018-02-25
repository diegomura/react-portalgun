import React from 'react';

export const withModal = (
  modalType,
  callbackName,
) => WrappedComponent => props => {
  const callback = {
    [callbackName]: props.showModal.bind(null, modalType),
  };

  return React.createElement(
    WrappedComponent,
    Object.assign({}, props, callback),
  );
};
