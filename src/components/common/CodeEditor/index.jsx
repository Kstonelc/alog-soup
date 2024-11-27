import React, { useEffect, useRef, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { vscodeDark, vscodeDarkInit } from "@uiw/codemirror-theme-vscode";

const CodeEditor = ({ height }) => {
  const [value, setValue] = React.useState("console.log('hello world!');");
  const onChange = React.useCallback((val, viewUpdate) => {
    console.log("val:", val);
    setValue(val);
  }, []);

  useEffect(() => {}, []);

  return (
    <CodeMirror
      className={"bg-green-50 h-full w-full"}
      extensions={[javascript({ jsx: true })]}
      height={height - 2 + "px"}
      options={{
        mode: "javascript",
        theme: "material",
        lineNumbers: true,
      }}
      theme={vscodeDark}
      value={value}
      onChange={onChange}
    />
  );
};

export default CodeEditor;
