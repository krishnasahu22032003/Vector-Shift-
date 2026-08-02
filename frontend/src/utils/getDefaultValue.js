export function getDefaultValue(field, id, data) {
  switch (field.defaultSource) {
    case "generatedInputName":
      return data[field.id] || id.replace("customInput-", "input_");

    case "generatedOutputName":
      return data[field.id] || id.replace("customOutput-", "output_");

    default:
      return data[field.id] ?? field.defaultValue ?? "";
  }
}