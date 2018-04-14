import "./index.css"
import React, { Fragment } from "react"
import { render } from "react-dom"
import Lesson from "./Lesson"
import styled from "styled-components"
import * as polished from "polished"
import { pipeProps, source } from "react-streams"
import { from } from "rxjs"
import { ajax } from "rxjs/ajax"
import { map, pluck, switchMap, tap } from "rxjs/operators"

const StyledLesson = styled(Lesson)`
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
const URL = `https://middle.react.egghead.training/`

const Lessons = pipeProps(
  switchMap(({ user, repo }) => ajax(`${URL}?user=${user}&repo=${repo}`)),
  tap(console.log.bind(console)),
  map(({ response }) => ({ lessons: response }))
)

render(
  <Lessons user="johnlindquist" repo="react-examples">
    {({ lessons }) => {
      const f = branch => lessons.find(lesson => lesson.branch === branch)
      return (
        <Fragment>
          <StyledLesson {...f("master")} />
          <StyledLesson {...f("no-jsx")} />
          <StyledLesson {...f("pure-component")} />
          <StyledLesson {...f("css-in-js")} />
          <StyledLesson {...f("pass-props")} />
        </Fragment>
      )
    }}
  </Lessons>,
  document.getElementById("root")
)
