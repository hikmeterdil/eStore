import React from 'react';

import './LoadingSpinner.css';

const LoadingSpinner = ({asOverlay}) => {
  return (
    <div className={`${asOverlay && 'spinner-asoverlay'}`}>
      <div className="spinner">Loading...</div>
    </div>
  )
};

export default LoadingSpinner;