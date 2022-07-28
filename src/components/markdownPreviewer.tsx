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
      dangerouslySetInnerHTML={{ __html: asHtml }}
    ></Container>
  )
}

export { MarkdownPreviewer }
