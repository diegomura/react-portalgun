import React from 'react';
import PropTypes from 'prop-types';

export const withModal = (
  modalType,
  callbackName,
  mapModalProps,
) => WrappedComponent => {
  const Wrapper = (props, context) => {
    let callback;

    if (mapModalProps) {
      callback = event => {
        const modalProps = mapModalProps({ event, ownProps: props });
        return context.showModal(modalType, modalProps);
      };
    } else {
      callback = event => {
        if (event.persist) {
          event.persist();
        }

        context.showModal(modalType, event);
      };
    }

    return React.createElement(
      WrappedComponent,
      Object.assign({}, props, { [callbackName || 'showModal']: callback }),
    );
  };

  Wrapper.contextTypes = {
    showModal: PropTypes.func,
  };

  return Wrapper;
};
