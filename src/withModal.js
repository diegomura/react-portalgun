import React from 'react';
import PropTypes from 'prop-types';

export const withModal = (modalType, callbackName) => WrappedComponent => {
  const Wrapper = (props, context) => {
    const callback = {
      [callbackName || 'showModal']: context.showModal.bind(null, modalType),
    };

    return React.createElement(
      WrappedComponent,
      Object.assign({}, props, callback),
    );
  };

  Wrapper.contextTypes = {
    showModal: PropTypes.func,
  };

  return Wrapper;
};
