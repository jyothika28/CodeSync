import CodeEditor from "../codeeditor/CodeEditor";
import Output from "../output/Output";
function Dashboard() {
  return (
    <div>
      <h1>Real time Code collaborator</h1>
      <CodeEditor />
      <Output />
      
    </div>
  );
}
export default Dashboard;