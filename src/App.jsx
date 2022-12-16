import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import "./App.css";

function App() {

  const values = `
  # H1
  # H2
  https://www.facebook.com
  `
  +"```\n function add() {return a + b} \n```\n"
  +"code block `<div></div>`"
  +`
  1. First item
  2. Second item
  3. Third item
      - Indented item
      - Indented item
  4. Fourth item

  ![Tux, the Linux mascot](/react.svg) **React**
  > Dorothy followed her through many of the beautiful rooms in her castle.
  `

  const [texto, setTexto] = useState(
    values
  );

  const func = (e) => {
    setTexto(e.target.value);
  };

  

  return (
    <>
      <main>
        <div className="cutiEditor">Editor</div>
        <textarea
        onChange={func}
        id="editor"
        value={texto}
        />
        <div id="preview">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{texto}</ReactMarkdown>
        </div>
      </main>
    </>
  );
}

export default App;
