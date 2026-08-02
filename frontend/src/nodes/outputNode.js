import Node from "../Components/Node/Node";
import { outputConfig } from "../configs/output.config";

export const OutputNode = (props) => {
  return <Node {...props} config={outputConfig} />;
};