import { calculateNodeSize } from "./calculateNodeSize";
import { extractVariables } from "./extractVariables";

export function getTextNodeConfig(text) {
  return {
    size: calculateNodeSize(text),
    variables: extractVariables(text),
  };
}