import { AppBar, IconButton, Link, Typography } from "@mui/material"
import { Container } from "@mui/system"

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      component="div"
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <AppBar position="static">
        <Typography
          variant="h5"
          href="https://github.com/potyoma/markdown-editor"
          component="a"
          sx={{
            m: "auto",
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".05rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          @potyoma
        </Typography>
      </AppBar>
      <Container>
        {children}
      </Container>
    </Container>
  )
}

export { Layout }
