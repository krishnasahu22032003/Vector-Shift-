import { fieldRenderers } from "../fieldRenderers";

const NodeField = ({ field, value, onChange }) => {
  const FieldComponent = fieldRenderers[field.type];

  if (!FieldComponent) {
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