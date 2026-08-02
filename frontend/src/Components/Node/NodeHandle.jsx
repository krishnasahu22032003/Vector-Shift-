import { Handle, Position } from "reactflow";
import { positionMap } from "../../constants/positionMap";
import "./NodeHandle.css";
const NodeHandle = ({ id, handles = [] }) => {
    console.log(handles);
  return (
    <>
      {handles.map((handle) => (
  <Handle
    key={`${id}-${handle.id}`}
    id={`${id}-${handle.id}`}
    type={handle.type}
    position={positionMap[handle.position]}
    className="node-handle"
    style={handle.style}
/>
      ))}
    </>
  );
};

export default NodeHandle;