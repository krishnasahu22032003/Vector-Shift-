import Node from "../Components/Node/Node";
import { llmConfig } from "../configs/llm.config";

export const LLMNode = (props) => {
  return <Node {...props} config={llmConfig} />;
};