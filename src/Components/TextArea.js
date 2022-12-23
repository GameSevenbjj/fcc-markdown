import Button from "react-bootstrap/Button";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ReactMarkdown from "react-markdown";
import Col from "react-bootstrap/Col";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import remarkGfm from "remark-gfm";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

function TextArea() {
  // Functional component that maintains the state of the react markdown previewer and sets the current state to markdownInput placeholder
  const [markdown, setMarkdown] = useState(markdownInput);
  //A function that clears the text in the markdown
  const resetMarkdown = () => {
    setMarkdown("");
  };
  return (
    <>
      <Form>
        <Row className="text-center">
          <Col className="text-center mx-auto">
            <div>
              <h1>Editor</h1>
            </div>
            <div>
              <Form.Control
                as="textarea"
                className="mx-auto scrollbar"
                style={{
                  border: "2px solid rgb(34, 34, 34)",
                  borderRadius: "8px",
                  padding: "20px",
                  margin: "20px auto",
                  height: "400px",
                  textAlign: "left",
                  boxSizing: "border-box",
                  backgroundColor: "transparent",
                }}
                id="editor"
                //Lets you change the state of the markdown
                onChange={(e) => setMarkdown(e.target.value)}
                value={markdown}
              ></Form.Control>
              <Button
                variant="outline-dark"
                itemID="btn"
                //Gives the button functionality, so when pressed it erases the text
                onClick={resetMarkdown}
              >
                Clear Text
              </Button>{" "}
            </div>
          </Col>
          <Col>
            <div className="text-center">
              <h1>Previewer</h1>
            </div>
            <div
              id="preview"
              className=" col-6 mx-auto"
              style={{
                border: "2px solid rgb(34, 34, 34)",
                borderRadius: "8px",
                padding: "20px",
                margin: "20px auto",
                textAlign: "left",
                boxSizing: "border-box",
              }}
            >
              <ReactMarkdown
                id="preview"
                children={markdown}
                remarkPlugins={[remarkGfm]}
                components={{
                  //Passes the functional component as a child
                  MarkComponent,
                  //Gives em elements a red text color
                  em: ({ node, ...props }) => (
                    <i style={{ color: "red" }} {...props} />
                  ),
                  //Passes the syntaxhighler as a child of the markdown
                  code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "");
                    return !inline && match ? (
                      <SyntaxHighlighter
                        children={String(children).replace(/\n$/, "")}
                        style={dark}
                        language={match[1]}
                        PreTag="div"
                        {...props}
                      />
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  },
                }}
              ></ReactMarkdown>
            </div>
          </Col>
        </Row>
      </Form>
    </>
  );
}

//A functional component that takes value and language as props so the syntax knowns what to highlight and use the docco for style
const MarkComponent = ({ value, language }) => {
  return (
    <SyntaxHighlighter language={language ?? null} style={docco}>
      {value ?? ""}
    </SyntaxHighlighter>
  );
};

//Placeholder for the markdown text
const markdownInput = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

~~~js
console.log('It works!')
~~~



1. Open the file.
2. Find the following code block on line 21:

        <html>
          <head>
            <title>Test</title>
          </head>

3. Update the title to match the name of your website.



You can also make text **bold**... whoa!  
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![Markdown Logo](https://chambers.io/assets/images/markdown_logo.png)
`;

export default TextArea;
