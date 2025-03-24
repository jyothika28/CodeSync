import { useRef, useState } from "react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "../language/LanguageSelector";
import { CODE_SNIPPETS } from "../../constants";
import Output from "../output/Output";

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  return (
    <div className="d-flex gap-3">
      <div className="w-50">
        <LanguageSelector language={language} onSelect={onSelect} />
        <Editor
          options={{ minimap: { enabled: false } }}
          height="75vh"
          theme="vs-dark"
          language={language}
          defaultValue={CODE_SNIPPETS[language]}
          onMount={onMount}
          value={value}
          onChange={(value) => setValue(value)}
        />
      </div>
      <Output editorRef={editorRef} language={language} />
    </div>
  );
};

export default CodeEditor;