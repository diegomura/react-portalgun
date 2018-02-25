import React from 'react';
import PropTypes from 'prop-types';
import warning from 'warning';

export class PortalProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      portalType: null,
      portalProps: {},
    };
  }

  getChildContext() {
    return { showPortal: this.showPortal.bind(this) };
  }

  showPortal(type, props) {
    this.setState({ portalType: type, portalProps: props });
  }

  closePortal() {
    this.setState({ portalType: null, portalProps: {} });
  }

  render() {
    const { portals } = this.props;
    const { portalType, portalProps } = this.state;
    const PortalComponent = portals[portalType];

    warning(
      !(portalType && !PortalComponent),
      `Warning: portalgun. ${portalType} is not a valid element`,
    );

    return React.createElement(
      'div',
      null,
      PortalComponent &&
        React.createElement(
          PortalComponent,
          Object.assign({}, portalProps, {
            onClose: this.closePortal.bind(this),
          }),
        ),
      this.props.children,
    );
  }
}

PortalProvider.childContextTypes = {
  showPortal: PropTypes.func,
};
