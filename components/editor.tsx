import { UnControlled as CodeMirror } from "react-codemirror2";
if (typeof window !== "undefined" && typeof window.navigator !== "undefined") {
  require("codemirror/mode/sql/sql");
  require("codemirror/lib/codemirror.css");
  require("codemirror/theme/monokai.css");
  require("codemirror/keymap/sublime");
}
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
