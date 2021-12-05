import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/theme-tomorrow";

const Editor = (props) => {
  return (
    <div className="border-4">
      <AceEditor
        height="200px"
        fontSize="18px"
        showGutter={false}
        mode="sql"
        theme="tomorrow"
        {...props}
      />
    </div>
  );
};

export default Editor;
