import "./index.css"
import React from "react"
import { render } from "react-dom"
import styled from "styled-components"
import ReactMarkdown from "react-markdown"
import helloWorldMD from "./lessons/hello-world.md"
import helloWorldJS from "./lessons/hello-world.js"

import Lesson from "./Lesson"
const StyledButton = styled.button`
  font-family: "Fira Code", "Operator Mono", "monaco", monospace;
`
render(
  <div>
    <Lesson name="hello-world" />
    <Lesson name="no-jsx" />
    <Lesson name="pure-component" />
    <Lesson name="pass-props" />
    <Lesson name="css-in-js" />
  </div>,
  document.getElementById("root")
)
