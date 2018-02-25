import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('body');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};

export default ({ onClose }) => (
  <Modal
    style={customStyles}
    contentLabel="Example Modal"
    onRequestClose={onClose}
    isOpen
  >
    <h1>Hello</h1>
    <div>I am a modal using Modly and react-modal</div>
    <span>You can close me by clicking on the overlay, or in</span>
    <button onClick={onClose}>here</button>
  </Modal>
);
