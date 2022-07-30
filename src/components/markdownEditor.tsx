import { Box, Container, TextareaAutosize } from "@mui/material"
import React from "react"

type Props = {
  onChange: (markdown: string) => void
  value: string
}

const MarkdownEditor: React.FC<Props> = ({ onChange, value }) => {
  const handleMarkdownChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target
    onChange(value)
  }

  return (
    <Box component="div">
      <TextareaAutosize
        id="editor"
        placeholder="Input your markdown text here"
        value={value}
        onChange={handleMarkdownChange}
        style={{
          width: "78vh",
          height: "40vh",
          borderRadius: "10px",
          border: "1",
          borderColor: "text.primary",
          padding: "1vh",
        }}
      />
    </Box>
  )
}

export { MarkdownEditor }
