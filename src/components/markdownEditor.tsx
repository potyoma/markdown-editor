import { Box, Container, TextareaAutosize } from "@mui/material"
import React from "react"

type Props = {
  onChange: (markdown: string) => void,
  value: string
}

const MarkdownEditor: React.FC<Props> = ({ onChange, value }) => {
  const handleMarkdownChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target
    onChange(value)
  }

  return (
    <Box
      sx={{
        border: 1,
        borderColor: "text.primary",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        width: "50vh",
        height: "50vh",
      }}
    >
      <TextareaAutosize
        id="editor"
        placeholder="Input your markdown text here"
        value={value}
        onChange={handleMarkdownChange}
        style={{
          width: "100%",
          height: "98%",
          padding: "1%",
          borderRadius: "10px",
          border: "none",
        }}
      />
    </Box>
  )
}

export { MarkdownEditor }
