import { Handle, Position } from "reactflow";

const positionMap = {
  left: Position.Left,
  right: Position.Right,
  top: Position.Top,
  bottom: Position.Bottom,
};

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