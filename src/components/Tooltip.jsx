import React from 'react';
import PropTypes from 'prop-types';

const Tooltip = (props) => {
  return (
    <div className={`tooltip ${props.position}`} style={props.tooltipStyle}>
      This is a tooltip
    </div>
  );
};

Tooltip.propTypes = {
  position: PropTypes.oneOf(['top', 'bottom', 'right', 'left']),
};

export default Tooltip;
