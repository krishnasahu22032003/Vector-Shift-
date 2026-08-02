import { fieldRenderers } from "../fieldRenderers";

const NodeField = ({ field, value, onChange }) => {
  console.log("NodeField:", field);

  const FieldComponent = fieldRenderers[field.type];

  if (!FieldComponent) {
    console.warn("Unknown field type:", field.type);
    return null;
  }

  return (
    <FieldComponent
      field={field}
      value={value}
      onChange={onChange}
    />
  );
};

export default NodeField;