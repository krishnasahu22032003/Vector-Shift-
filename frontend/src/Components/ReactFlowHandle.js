import { Handle, Position } from "reactflow"

const ReactFlowHandle = (type, position, id) => {
    return (
        <Handle
            type={type}
            position={Position.position}
            id={`${id}-${id}`}
        />

    )
}

export default ReactFlowHandle;
