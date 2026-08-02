import Node from "../Components/Node/Node";
import { textConfig } from "../configs/text.config";

export const TextNode = (props) => {
  return <Node {...props} config={textConfig} />;
};