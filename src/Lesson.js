import React from "react"
import ReactMarkdown from "react-markdown"
import Editor from "./Editor"

export default ({ markdown, code }) => {
  console.log({ markdown, code })
  return (
    <div className="lesson">
      <ReactMarkdown source={markdown} />
      <Editor code={code} />
    </div>
  )
}
