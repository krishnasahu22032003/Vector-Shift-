import Node from "../Components/Node/Node";
import { apiConfig } from "../configs/api.config";

export const APINode = (props) => {
  return <Node {...props} config={apiConfig} />;
};