import React from 'react';
import PropTypes from 'prop-types';

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
    const { modalType } = this.state;
    const ModalComponent = modals[modalType];

    return React.createElement(
      'div',
      null,
      ModalComponent &&
        React.createElement(ModalComponent, {
          onClose: this.closeModal.bind(this),
        }),
      this.props.children,
    );
  }
}

ModalProvider.childContextTypes = {
  showModal: PropTypes.func,
};
