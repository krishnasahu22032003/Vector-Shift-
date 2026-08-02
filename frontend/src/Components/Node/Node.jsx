import NodeHeader from "./NodeHeader";
import NodeField from "./NodeField";
import NodeHandle from "./NodeHandle";
import { useNodeState } from "../../hooks/useNodeState";
import "./Node.css";

const Node = ({ id, data = {}, config }) => {
    const { values, updateValue } = useNodeState(
        id,
        data,
        config
    );
console.log(config.title, config.icon);
    return (
        <div
         className="node"
            style={{
                width: config.size.width,
                minHeight: config.size.height,
           
            }}
        >
            <NodeHeader
                title={config.title}
                subtitle={config.subtitle}
                icon={config.icon}
            />

            {config.description && (
                <p>{config.description}</p>
            )}
            {config.fields.map((field) => (
                <NodeField
                    key={field.id}
                    field={field}
                    value={values[field.id]}
                    onChange={updateValue}
                />
            ))}

            <NodeHandle
                id={id}
                handles={config.handles}
            />
        </div>
    );
};

export default Node;