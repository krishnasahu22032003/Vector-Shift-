import Node from "../Components/Node/Node";
import { webSearchConfig } from "../configs/webSearch.config";

export const WebSearchNode = (props) => {
  return <Node {...props} config={webSearchConfig} />;
};