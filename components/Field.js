import React, { PropTypes } from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  border: 1px solid #ccc;
`

const Label = styled.label`
  display: block;
  font-weight: bold;
`

const Field = ({
  children,
  label,
  name,
}) => (
  <Wrapper>
    <Label htmlFor={name}>{label}</Label>
  { children }
  </Wrapper>
);

Field.propTypes = {
  children: React.PropTypes.node,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default Field;