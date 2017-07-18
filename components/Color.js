import React, { PropTypes } from 'react';
import styled, { ThemeProvider } from 'styled-components'
import {
  theme,
} from '../css/ThemeStyles'

// Row 1
const PrimaryColorBlock = styled.div`
  background-color: ${props => props.theme.colorPrimary};
`

const ActiveColorBlock = styled.div`
  background-color: ${props => props.theme.colorActive};
`

const SecondaryColorBlock = styled.div`
  background-color: ${props => props.theme.colorSecondary};
`

const BlackColorBlock = styled.div`
  background-color: ${props => props.theme.colorBlack};
`

// Row 2
const Accent1ColorBlock = styled.div`
  background-color: ${props => props.theme.colorAccent1};
`

const Accent1MutedColorBlock = styled.div`
  background-color: ${props => props.theme.colorAccent1Muted};
`

// Row 3
const Accent2ColorBlock = styled.div`
  background-color: ${props => props.theme.colorAccent2};
`

const Accent2MutedColorBlock = styled.div`
  background-color: ${props => props.theme.colorAccent2Muted};
`

// Row 4
const Accent3ColorBlock = styled.div`
  background-color: ${props => props.theme.colorAccent3};
`

const Accent3MutedColorBlock = styled.div`
  background-color: ${props => props.theme.colorAccent3Muted};
`

const Color = ({

  }) => (
    <ThemeProvider theme={theme}>
      <div>
        <div className="demo-flexbox-container">
          <PrimaryColorBlock>#0D5A8A</PrimaryColorBlock>
          <ActiveColorBlock>#137CBD</ActiveColorBlock>
          <SecondaryColorBlock>#0D5A8A</SecondaryColorBlock>
          <BlackColorBlock>#182026</BlackColorBlock>
        </div>
        <div className="demo-flexbox-container">
          <Accent1ColorBlock>#0F9960</Accent1ColorBlock>
          <Accent1MutedColorBlock>#A1DEC4</Accent1MutedColorBlock>
        </div>
        <div className="demo-flexbox-container">
          <Accent2ColorBlock>#D9822B</Accent2ColorBlock>
          <Accent2MutedColorBlock>#F3D9BF</Accent2MutedColorBlock>
        </div>
        <div className="demo-flexbox-container">
          <Accent3ColorBlock>#B83130</Accent3ColorBlock>
          <Accent3MutedColorBlock>#D46E6E</Accent3MutedColorBlock>
        </div>
      </div>
    </ThemeProvider>
);

export default Color;