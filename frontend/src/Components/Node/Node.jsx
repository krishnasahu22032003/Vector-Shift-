import NodeHeader from "./NodeHeader";
import NodeField from "./NodeField";
import NodeHandle from "./NodeHandle";
import { useNodeState } from "../../hooks/useNodeState";


const Node = ({ id, data = {}, config }) => {
    const { values, updateValue } = useNodeState(
        id,
        data,
        config
    );
console.log(config.title, config.icon);
    return (
        <div
            style={{
                width: config.size.width,
                height: config.size.height,
                border: "1px solid black",
                padding: "10px",
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