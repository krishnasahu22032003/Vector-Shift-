import axios from "axios";
import { useStore } from "../../store";
import "./SubmitButton.css";

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/pipelines/parse",
        {
          nodes,
          edges,
        }
      );

      const {
        num_nodes,
        num_edges,
        is_dag,
      } = response.data;

      alert(
`Pipeline Analysis

Nodes: ${num_nodes}
Edges: ${num_edges}
Is DAG: ${is_dag ? "✅ Yes" : "❌ No"}`
      );
    } catch (error) {
      console.error(error);
      alert("Failed to submit pipeline.");
    }
  };

  return (
    <div className="submit-container">
      <button
        className="submit-button"
        onClick={handleSubmit}
      >
        Submit Pipeline
      </button>
    </div>
  );
};