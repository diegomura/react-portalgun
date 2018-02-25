import React from 'react';

class Alert extends React.Component {
  componentDidMount() {
    setTimeout(this.props.onClose, 3000);
  }

  render() {
    const { title, message } = this.props;

    return (
      <div className="alert">
        <h2>{title}</h2>
        <div>{message}</div>
      </div>
    );
  }
}

export default Alert;
