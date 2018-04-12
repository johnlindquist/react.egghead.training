import React from "react"
import ReactMarkdown from "react-markdown"
import Editor from "./Editor"

export default props => {
  const code = require(`./lessons/${props.name}.js`)
  const md = require(`./lessons/${props.name}.md`)

  return (
    <div>
      <ReactMarkdown source={md} />
      <Editor code={code} />
    </div>
  )
}
