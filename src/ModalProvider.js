import React from 'react';
import PropTypes from 'prop-types';
import warning from 'warning';

export class ModalProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalType: null,
      modalProps: {},
    };
  }

  getChildContext() {
    return { showModal: this.showModal.bind(this) };
  }

  showModal(type, props) {
    this.setState({ modalType: type, modalProps: props });
  }

  closeModal() {
    this.setState({ modalType: null, modalProps: {} });
  }

  render() {
    const { modals } = this.props;
    const { modalType, modalProps } = this.state;
    const ModalComponent = modals[modalType];

    warning(
      !(process.env.NODE_ENV !== 'production' && modalType && !ModalComponent),
      `Warning: Modly. ${modalType} is not a valid element`,
    );

    return React.createElement(
      'div',
      null,
      ModalComponent &&
        React.createElement(
          ModalComponent,
          Object.assign({}, modalProps, {
            onClose: this.closeModal.bind(this),
          }),
        ),
      this.props.children,
    );
  }
}

ModalProvider.childContextTypes = {
  showModal: PropTypes.func,
};
