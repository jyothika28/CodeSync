import { useState } from "react";
import { executeCode } from "../../api"; 

const Output = ({ editorRef, language }) => {
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
    try {
      setIsLoading(true);
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output.split("\n"));
      result.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
      console.log(error);
      alert("An error occurred: " + (error.message || "Unable to run code"));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-50">
      <h5>Output</h5>
      <button className="btn btn-success mb-3" disabled={isLoading} onClick={runCode}>
      <i className="fa-solid fa-play"></i> {isLoading ? " Running..." : " Run Code"}
      </button>
      <div className={`border p-3 ${isError ? "text-danger border-danger" : "border-light"}`}>
        {output ? output.map((line, i) => <p key={i}>{line}</p>) : 'Click "Run Code" to see the output here'}
      </div>
    </div>
  );
};

export default Output;