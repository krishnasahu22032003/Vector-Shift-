import Node from "../Components/Node/Node";
import { inputConfig } from "../configs/input.config";

export const InputNode = (props) => {
  return (
    <Node
      {...props}
      config={inputConfig}
    />
  );
};