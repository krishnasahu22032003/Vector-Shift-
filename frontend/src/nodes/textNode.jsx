import Node from "../Components/Node/Node";
import { textConfig } from "../configs/text.config";
import { getTextNodeConfig } from "../utils/getTextNodeConfig";

export const TextNode = (props) => {
  const transformConfig = (config, values) => {
    const text = values.text ?? "{{input}}";

    const { size, variables } = getTextNodeConfig(text);

    return {
      ...config,
      size,
      handles: [
        ...variables.map((variable, index) => ({
          id: variable,
          type: "target",
          position: "left",
          style: {
            top: `${((index + 1) / (variables.length + 1)) * 100}%`,
          },
        })),
        ...config.handles,
      ],
    };
  };

  return (
    <Node
      {...props}
      config={textConfig}
      transformConfig={transformConfig}
    />
  );
};