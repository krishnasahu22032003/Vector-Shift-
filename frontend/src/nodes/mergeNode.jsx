import Node from "../Components/Node/Node";
import { mergeConfig } from "../configs/merge.config";

export const MergeNode = (props) => {
  return <Node {...props} config={mergeConfig} />;
};