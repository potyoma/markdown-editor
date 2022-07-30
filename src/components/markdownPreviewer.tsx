import { Container } from "@mui/material"
import { marked } from "marked"

type Props = {
  markdown: string
}

const MarkdownPreviewer: React.FC<Props> = ({ markdown }) => {
  const asHtml: string = marked.parse(markdown, { gfm: true, breaks: true })

  return (
    <Container
      id="preview"
      sx={{
        border: 1,
        borderColor: "text.primary",
        borderRadius: "10px",
        width: "80vh",
        height: "94vh",
        img: {
          maxWidth: "90%",
        },
      }}
      dangerouslySetInnerHTML={{ __html: asHtml }}
    />
  )
}

export { MarkdownPreviewer }
