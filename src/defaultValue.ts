const heading = "# Welcome to my React Markdown Previewer!"
const subHeading = "## This is a sub-heading..."
const code = "Heres some code, `<div></div>`, between 2 backticks."
const multilineCode =
  "```js\nfunction anotherExample(firstLine, lastLine) {\n" +
  "if (firstLine == '```' && lastLine == '```') " +
  "{\n return multiLineCode;\n  }\n}\n```"
const bold = "You can also make text **bold**... whoa!"
const link = "There's also [links](https://www.freecodecamp.org)"
const list = `- And of course there are lists.
- Some are bulleted.
   - With different indentation levels.
      - That look like this.`
const quote = "> Block Quotes!"
const image =
  "![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)"

const DEFAULT_VALUE =
  `${heading}\n${subHeading}\n${code}\n${multilineCode}\n` +
  `${bold}\n${link}\n${list}\n${quote}\n${image}`

export { DEFAULT_VALUE }
