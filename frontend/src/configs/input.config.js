export const inputNodeConfig = {
  title: "Input",

  styles: {
    width: 200,
    height: 80,
    border: "1px solid black",
  },

  fields: [
    {
      id: "inputName",
      label: "Name",
      type: "text",
      defaultValue: ({ id, data }) =>
        data?.inputName || id.replace("customInput-", "input_"),
    },
    {
      id: "inputType",
      label: "Type",
      type: "select",
      defaultValue: ({ data }) => data?.inputType || "Text",
      options: [
        {
          label: "Text",
          value: "Text",
        },
        {
          label: "File",
          value: "File",
        },
      ],
    },
  ],

  handles: {
    inputs: [],

    outputs: [
      {
        id: "value",
        type: "source",
        position: "right",
      },
    ],
  },
};