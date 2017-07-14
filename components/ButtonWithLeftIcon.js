import React, { PropTypes } from 'react';
import styled, {ThemeProvider} from 'styled-components'
import {
  theme
} from '../css/ThemeStyles'

const ButtonWithLeftIcon = styled.button`
  background-color: ${props => props.theme.colorActive};
  
  border-radius: ${props => props.theme.defaultBorderRadius};
  border: ${props => props.theme.buttonBorder};
  color: ${props => props.theme.colorWhite};
  line-height: 1;
  padding: ${props => props.theme.defaultPadding};
  cursor: pointer;
  position: relative;


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

  .svg-icon-left {
    display: inline-flex;
    align-self: center;
    position: relative;
    width: 1em;
    height: 1em;
    margin-right: .5em;
  }
  svg {
    width: 1em;
    height: 1em;
    bottom: -0.125em;
    position: absolute;
    fill: currentColor;
    line-height: 1;
  }
`

// icon for inner button
const clockIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 12"><path fill="currentColor" fill-rule="evenodd" d="M7.1 3.25v3.5c0 .14-.11.25-.25.25h-2.5c-.14 0-.25-.11-.25-.25v-.5c0-.14.11-.25.25-.25H6.1V3.25c0-.14.11-.25.25-.25h.5c.14 0 .25.11.25.25zM10.35 6c0-2.344-1.906-4.25-4.25-4.25-2.344 0-4.25 1.906-4.25 4.25 0 2.344 1.906 4.25 4.25 4.25 2.344 0 4.25-1.906 4.25-4.25zm1.75 0c0 3.312-2.687 6-6 6-3.312 0-6-2.688-6-6 0-3.313 2.688-6 6-6 3.313 0 6 2.687 6 6z"/></svg>

const Button = ({
  children,
  ...props,
}) => (
  <ThemeProvider theme={theme}>
    <ButtonWithLeftIcon {...props}>
      <div className="svg-icon-left">{clockIcon}</div>
      { children }
    </ButtonWithLeftIcon>
  </ThemeProvider>
);

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  submit: PropTypes.bool,
};

export default Button;