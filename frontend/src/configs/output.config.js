export const outputConfig = {
  title: "Output",

  size: {
    width: 200,
    height: 80,
  },

  handles: [
    {
      id: "value",
      type: "target",
      position: "left",
    },
  ],

  fields: [
    {
      id: "outputName",
      label: "Name",
      type: "text",
      defaultSource: "generatedOutputName",
    },

    {
      id: "outputType",
      label: "Type",
      type: "select",
      defaultValue: "Text",
      options: [
        {
          label: "Text",
          value: "Text",
        },
        {
          label: "Image",
          value: "File",
        },
      ],
    },
  ],
};