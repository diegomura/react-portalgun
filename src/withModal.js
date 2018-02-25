import React from 'react';
import PropTypes from 'prop-types';
import warning from 'warning';

export const withModal = (
  modalType,
  callbackName,
  mapModalProps,
) => WrappedComponent => {
  const Wrapper = (props, context) => {
    let callback;

    if (!context.showModal) {
      warning(
        false,
        'Error: Modly. Wrap your application in a <ModalProvider />',
      );
      return React.createElement(WrappedComponent, props);
    }

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
