import React, { PropTypes } from 'react';
import styled, {ThemeProvider} from 'styled-components'
import {
  theme,
} from '../css/ThemeStyles'

const Heading1 = styled.h1`
  font-size: ${props => props.theme.fontSizeH1}px;
  line-height: ${props => props.theme.lineHeight40}px;
`
const Heading2 = styled.h2`
  font-size: ${props => props.theme.fontSizeH2}px;
  line-height: ${props => props.theme.lineHeight32}px;
`
const Heading3 = styled.h3`
  font-size: ${props => props.theme.fontSizeH3}px;
  line-height: ${props => props.theme.lineHeight24}px;
`
const ParagraphRunningText = styled.p`
  font-size: ${props => props.theme.fontSizeRunningText}px;
  line-height: ${props => props.theme.lineHeight24}px;
`
const ParagraphUIText = styled.p`
  font-size: ${props => props.theme.fontSizeUIText}px;
  line-height: ${props => props.theme.lineHeight24}px;
`
const ParagraphCaption = styled.p`
  font-size: ${props => props.theme.fontSizeNormal}px;
  line-height: ${props => props.theme.lineHeight24}px;
`
const ParagraphSmall = styled.p`
  font-size: ${props => props.theme.fontSizeSmall}px;
  line-height: ${props => props.theme.lineHeight24}px;
`

const ParagraphSmallMuted = styled.p`
  color: ${props => props.theme.colorMutedBlack};
  font-size: ${props => props.theme.fontSizeNormal}px;
  line-height: ${props => props.theme.lineHeight16}px;
  text-transform: uppercase;
  margin: 30px 0 0;
  border-bottom: 1px solid;
`

const Typography = ({

  }) => (
    <ThemeProvider theme={theme}>
        <div>
          <ParagraphSmallMuted><small>Heading 1 (32/40)</small></ParagraphSmallMuted>
          <Heading1>The quick brown fox jumps over the lazy dog</Heading1>

          <ParagraphSmallMuted><small>Heading 2 (24/32)</small></ParagraphSmallMuted>
          <Heading2>The quick brown fox jumps over the lazy dog</Heading2>

          <ParagraphSmallMuted><small>Heading 3 (16/24)</small></ParagraphSmallMuted>
          <Heading3>The quick brown fox jumps over the lazy dog 16/24</Heading3>

          {/* Running text */}
          <ParagraphSmallMuted><small>Paragraph Running Text (16/24)</small></ParagraphSmallMuted>
          <ParagraphRunningText><strong>The quick brown fox jumps over the lazy dog 16/24</strong></ParagraphRunningText>
          <ParagraphRunningText><small>The quick brown fox jumps over the lazy dog 16/24</small></ParagraphRunningText>

          {/* UI text */}
          <ParagraphSmallMuted><small>Paragraph UI Text (14/22)</small></ParagraphSmallMuted>
          <ParagraphUIText><strong>The quick brown fox jumps over the lazy dog 14/22</strong></ParagraphUIText>
          <ParagraphUIText><small>The quick brown fox jumps over the lazy dog 14/22</small></ParagraphUIText>

          {/* Caption text */}
          <ParagraphSmallMuted><small>Paragraph Normal (12/20)</small></ParagraphSmallMuted>
          <ParagraphCaption><strong>The quick brown fox jumps over the lazy dog 12/20</strong></ParagraphCaption>
          <ParagraphCaption><small>The quick brown fox jumps over the lazy dog 12/20</small></ParagraphCaption>

          {/* Small text */}
          <ParagraphSmallMuted><small>Paragraph Small (8/16)</small></ParagraphSmallMuted>
          <ParagraphSmall><strong><small>The quick brown fox jumps over the lazy dog 8/16</small></strong></ParagraphSmall>
          <ParagraphSmall><small>The quick brown fox jumps over the lazy dog 8/16</small></ParagraphSmall>
        </div>
    </ThemeProvider>
  );

export default Typography;