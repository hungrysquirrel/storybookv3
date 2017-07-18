import React, { PropTypes } from 'react';

const Tooltip = ({
  children,
  ...props,
}) => (

  <Tooltip content="I am a very cool tooltip!" position={Position.RIGHT}>
    { children }
  </Tooltip>

);

export default Tooltip;