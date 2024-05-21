import React from 'react';
import './index.css';

const Thanks = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-message">
        <h2>Form Submitted!</h2>
        <p>Your form has been successfully submitted.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Thanks;
