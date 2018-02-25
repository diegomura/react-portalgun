import React from 'react';

export default ({ onClose }) => (
  <div className="modal">
    <div className="overlay" onClick={onClose} />
    <div className="content">
      <h1>Hello</h1>
      <div>I am a custom modal using Modly</div>
      <span>You can close me by clicking on the overlay, or in</span>
      <button onClick={onClose}>here</button>
    </div>
  </div>
);
