import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/theme-tomorrow";

const Editor = (props) => {
  return <AceEditor mode="sql" theme="tomorrow" {...props} />;
};

export default Editor;
