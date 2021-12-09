import { UnControlled as CodeMirror } from "react-codemirror2";
import "codemirror/mode/sql/sql";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/monokai.css";
import "codemirror/keymap/sublime";
import { useState } from "react";

const Editor = (props: any) => {
  const [cursorPosition, setCursorPosition] = useState();
  return (
    <div
      className="border-4 border-gray-100 dark:border-darkBorder rounded-md w-full h-52"
      style={{ height: "30vh" }}
    >
      <CodeMirror
        autoCursor
        className="w-full h-full text-sm sm:text-base shadow-md overflow-hidden"
        {...props}
        value={props.value}
        options={{
          mode: "sql",
          lineNumbers: false,
          theme: "monokai",
        }}
        cursor={cursorPosition}
        onChange={(editor, __, value) => {
          setCursorPosition(editor.getDoc().getCursor());
          props.setValue(value);
        }}
        name="editor"
      />
    </div>
  );
};

export default Editor;
