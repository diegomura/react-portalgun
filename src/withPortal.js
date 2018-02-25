import React from 'react';
import PropTypes from 'prop-types';
import warning from 'warning';

export const withPortal = (
  portalType,
  callbackName,
  mapPropsToPortal,
) => WrappedComponent => {
  const Wrapper = (props, context) => {
    let callback;

    if (!context.showPortal) {
      warning(
        false,
        'Error: portalgun. Wrap your application in a <PortalProvider />',
      );
      return React.createElement(WrappedComponent, props);
    }

    if (mapPropsToPortal) {
      callback = event => {
        const portalProps = mapPropsToPortal({ event, ownProps: props });
        return context.showPortal(portalType, portalProps);
      };
    } else {
      callback = event => {
        if (event.persist) {
          event.persist();
        }

        context.showPortal(portalType, event);
      };
    }

    return React.createElement(
      WrappedComponent,
      Object.assign({}, props, { [callbackName || 'showPortal']: callback }),
    );
  };

  Wrapper.contextTypes = {
    showPortal: PropTypes.func,
  };

  return Wrapper;
};
