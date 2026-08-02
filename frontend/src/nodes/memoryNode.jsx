import Node from "../Components/Node/Node";
import { memoryConfig } from "../configs/memory.config";

export const MemoryNode = (props) => {
  return <Node {...props} config={memoryConfig} />;
};