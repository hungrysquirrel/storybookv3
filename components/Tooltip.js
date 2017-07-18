import React from 'react'
import styled from 'styled-components'

const Tooltip = styled.div`
  background-color: rgba(0,0,0,0.7);
  border: 0;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  padding: 8px 16px;
  margin: 10px;
  font-family: "OpenSans";
`

export default ({styleName, tooltipText}) => (
  <Tooltip style={styleName}>
    {tooltipText}
  </Tooltip>
)