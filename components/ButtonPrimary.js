import React, { PropTypes } from 'react';
import styled, {ThemeProvider} from 'styled-components'
import {
  theme
} from '../css/ThemeStyles'

const ButtonPrimary = styled.button`
  background-color: ${props => props.theme.colorActive};
  
  border-radius: ${props => props.theme.defaultBorderRadius};
  border: ${props => props.theme.buttonBorder};
  color: ${props => props.theme.colorWhite};
  padding: ${props => props.theme.defaultPadding};


  &.default {
    background-color: ${props => props.theme.colorWhite};
    border: 1px solid rgba(16, 22, 26, 0.1);
    color: ${props => props.theme.colorBlack};
  }
  &.danger {
    background-color: ${props => props.theme.colorAccent3};
  }

  /* Hover */
  &:hover {
    background-color: ${props => props.theme.colorPrimary};
    cursor: pointer;
  }

  &.danger:hover {
    background-color: ${props => props.theme.colorAccent3Darkened};
  }

  &.default:hover {
    background-color: ${props => props.theme.colorSecondaryMuted};
    border: 1px solod rgba(16, 22, 26, 0.2);
  }

  /* Active */
  &:active {
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(0, 0, 0, 0.4);
  }

  /* Disabled */
  &:disabled {
    cursor: not-allowed;
    color: rgba(255, 255, 255, 0.6);
    background-color: rgba(0, 0, 0, 0.3);
  }

  /* Size */
  &.small {
    font-size: 12px;
    line-height: 24px;
    min-height: 24px;
    padding: 0 8px;
  }
  &.medium {
    font-size: 14px;
    line-height: 32px;
    min-height: 32px;
    padding: 0 10px;
  }
  &.large {
    font-size: 16px;
    line-height: 40px;
    min-height: 40px;
    padding: 0 15px;
  }
`



const Button = ({
  children,
  ...props,
}) => (
  <ThemeProvider theme={theme}>
    <ButtonPrimary {...props}>
      { children }
    </ButtonPrimary>
  </ThemeProvider>
);

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  submit: PropTypes.bool,
};

export default Button;