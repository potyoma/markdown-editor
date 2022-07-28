import { Container } from "@mui/material"
import { useState } from "react"
import { DEFAULT_VALUE } from "../defaultValue"
import { MarkdownEditor } from "./markdownEditor"
import { MarkdownPreviewer } from "./markdownPreviewer"

type Props = {}

const Main: React.FC<Props> = ({}) => {
  const [markdown, setMarkdown] = useState<string>(DEFAULT_VALUE)

  const handleChange = (markdown: string) => setMarkdown(markdown)

  return (
    <Container
      maxWidth={false}
      disableGutters
      component="div"
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: "azure",
        p: "1%",
      }}
    >
      <MarkdownEditor value={markdown} onChange={handleChange} />
      <MarkdownPreviewer markdown={markdown} />
    </Container>
  )
}

export { Main }
