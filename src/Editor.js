import React from "react"
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"

import styled from "styled-components"

import * as polished from "polished"

export const background = "#282a36"
export const foreground = "#f8f8f2"
export const red = "#ff5555"

export const blue = polished.lighten(0.1, "#6272a4")
export const lightGrey = polished.darken(0.05, "#282a36")
const scope = { styled }

const LiveWrapper = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 320px;
  max-height: 480px;

  @media (max-width: 600px) {
    flex-direction: column;
    max-height: auto;
  }
`

const StyledEditor = styled(LiveEditor)`
  background: ${lightGrey};
  font-size: ${polished.rem(17)};
  height: auto;
  overflow: auto;
  flex: 3;
  @media (max-width: 600px) {
    padding: 0;
    margin: 0;
    outline: 0;
    font-size: ${polished.rem(14)};
    max-height: 320px;
  }
`

const StyledPreview = styled(LivePreview)`
  position: relative;
  padding: 0.5rem;
  background: white;
  color: black;
  height: auto;

  overflow: hidden;
  flex: 1;
  font-family: "Avenir", sans-serif;
  border: 2px solid black;

  @media (max-width: 600px) {
    padding: 0;
    margin: 0;
    outline: 0;
  }
`

const StyledError = styled(LiveError)`
  flex: 2;
  padding: ${polished.rem(8)};
  background: ${red};
  color: ${foreground};
  @media (max-width: 600px) {
    padding: 0;
    margin: 0;
    outline: 0;
  }
`

const Example = styled.div`
  padding: ${polished.rem(20)};
  margin: ${polished.rem(20)};
  outline: 10px solid black;
  width: 720px;
  @media (max-width: 600px) {
    padding: 0;
    margin: 0;
    width: 100vw;
    min-width: 100vw;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: auto;
  @media (max-width: 600px) {
    align-items: none;
    width: 100%;
  }
`

class CatchPreview extends StyledPreview {
  componentDidCatch(error, info) {
    console.log(error, info)
  }
}

const PreviewErrorContainer = styled.div`
  flex: 2
  display: flex;
  flex-direction: column;
  max-width: 310px;
  @media (max-width: 600px) {
   max-width: 100vw;
    width: 100%;
  }
`

const ExamplesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

export default props => (
  <LiveProvider scope={scope} code={props.code} noInline>
    <LiveWrapper>
      <StyledEditor />
      <PreviewErrorContainer>
        <CatchPreview />
        <StyledError />
      </PreviewErrorContainer>
    </LiveWrapper>
  </LiveProvider>
)
