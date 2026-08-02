export const textConfig = {
  title: "Text",

  size: {
    width: 200,
    height: 80,
  },

  fields: [
    {
      id: "text",
      label: "Text",
      type: "textarea",
      defaultValue: "{{input}}",
    },
  ],

  handles: [
    {
      id: "output",
      type: "source",
      position: "right",
    },
  ],
};