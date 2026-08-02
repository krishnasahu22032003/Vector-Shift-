// hooks/useNodeState.js

import { useState } from "react";
import { useStore } from "../store";
import { getDefaultValue } from "../utils/getDefaultValue";

export const useNodeState = (id, data, config) => {
  const updateNodeField = useStore(
    (state) => state.updateNodeField
  );

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

    updateNodeField(id, fieldId, value);
  };

  return {
    values,
    updateValue,
  };
};