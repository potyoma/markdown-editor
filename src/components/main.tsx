import { Box, Grid } from "@mui/material"
import { useState } from "react"
import { DEFAULT_VALUE } from "../defaultValue"
import { MarkdownEditor } from "./markdownEditor"
import { MarkdownPreviewer } from "./markdownPreviewer"

type Props = {}

const Main: React.FC<Props> = ({}) => {
  const [markdown, setMarkdown] = useState<string>(DEFAULT_VALUE)

  const handleChange = (markdown: string) => setMarkdown(markdown)

  return (
    <Box
      component="div"
      sx={{
        marginTop: "1vh",
        maxWidth: "250vh"
      }}
    >
      <Grid
        spacing={4}
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
        sx={{
          flexGrow: 1,
          width: "100%"
        }}
      >
        <Grid item lg={5}>
          <MarkdownEditor value={markdown} onChange={handleChange} />
        </Grid>
        <Grid item lg={5}>
          <MarkdownPreviewer markdown={markdown} />
        </Grid>
      </Grid>
    </Box>
  )
}

export { Main }
