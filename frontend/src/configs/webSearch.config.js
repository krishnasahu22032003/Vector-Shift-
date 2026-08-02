export const webSearchConfig = {
  title: "Web Search",

  description: "Searches the web.",

  size: {
    width: 220,
    height: 120,
  },

  fields: [
    {
      id: "query",
      label: "Query",
      type: "text",
      defaultValue: "",
    },
  ],

  handles: [
    {
      id: "input",
      type: "target",
      position: "left",
    },
    {
      id: "results",
      type: "source",
      position: "right",
    },
  ],
};