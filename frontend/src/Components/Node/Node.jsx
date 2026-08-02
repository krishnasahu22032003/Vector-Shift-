import { useState } from "react";

import NodeHeader from "./NodeHeader";
import NodeField from "./NodeField";
import NodeHandle from "./NodeHandle";

import { getDefaultValue } from "../../utils/getDefaultValue";

const Node = ({ id, data = {}, config }) => {
  const [values, setValues] = useState(() => {
    const initialValues = {};

    config.fields.forEach((field) => {
      initialValues[field.id] = getDefaultValue(field, id, data);
    });

    return initialValues;
  });

  const updateValue = (fieldId, value) => {
    setValues((prev) => ({
      ...prev,
      [fieldId]: value,
    }));
  };

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