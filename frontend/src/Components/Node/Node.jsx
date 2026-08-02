import NodeHeader from "./NodeHeader";
import NodeField from "./NodeField";
import NodeHandle from "./NodeHandle";
import { useNodeState } from "../../hooks/useNodeState";
import "./Node.css";
import { useEffect } from "react";
import { useUpdateNodeInternals } from "reactflow";

const Node = ({
  id,
  data = {},
  config,
  transformConfig,
}) => {
  const { values, updateValue } = useNodeState(
    id,
    data,
    config
  );

  const resolvedConfig = transformConfig
    ? transformConfig(config, values)
    : config;

  return (
    <div
      className="node"
      style={{
        width: resolvedConfig.size.width,
        minHeight: resolvedConfig.size.height,
      }}
    >
      <NodeHeader
        title={resolvedConfig.title}
        subtitle={resolvedConfig.subtitle}
        icon={resolvedConfig.icon}
      />

      {resolvedConfig.description && (
        <p className="node-description">
          {resolvedConfig.description}
        </p>
      )}

      {resolvedConfig.fields.map((field) => (
        <NodeField
          key={field.id}
          field={field}
          value={values[field.id]}
          onChange={updateValue}
        />
      ))}

      <NodeHandle
        id={id}
        handles={resolvedConfig.handles}
      />
    </div>
  );
};

export default Node;