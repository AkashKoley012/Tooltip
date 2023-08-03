import React, { useState } from 'react';
import Tooltip from './Tooltip';

const App = () => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const tooltipStyle = {
    position: 'relative',
    display: isHover ? 'inline' : 'none',
    backgroundColor: '#333',
    color: '#fff',
    padding: '5px',
    borderRadius: '4px',
    fontSize: '14px',
    zIndex: '1',
  };

  return (
    <div className="App">
      <Tooltip position="bottom" tooltipStyle={tooltipStyle} />
      <button
        className="btn"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Press
      </button>
    </div>
  );
};

export default App;
