const defaultValueGenerators = {
  generatedInputName: (field, id, data) =>
    data[field.id] ?? id.replace("customInput-", "input_"),

  generatedOutputName: (field, id, data) =>
    data[field.id] ?? id.replace("customOutput-", "output_"),
};

export function getDefaultValue(field, id, data) {
  if (field.defaultSource) {
    const generator = defaultValueGenerators[field.defaultSource];

    if (generator) {
      return generator(field, id, data);
    }
  }

  return data[field.id] ?? field.defaultValue ?? "";
}