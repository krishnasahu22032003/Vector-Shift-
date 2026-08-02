import { Handle, Position } from "reactflow";
import { positionMap } from "../../constants/positionMap";

const NodeHandle = ({ id, handles = [] }) => {
  return (
    <>
      {handles.map((handle) => (
        <Handle
          key={handle.id}
          id={`${id}-${handle.id}`}
          type={handle.type}
          position={positionMap[handle.position]}
          style={handle.style || {}}
        />
      ))}
    </>
  );
};

export default NodeHandle;