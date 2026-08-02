export const mergeConfig = {
  title: "Merge",

  description: "Combines multiple inputs.",

  size: {
    width: 220,
    height: 100,
  },

  fields: [],

  handles: [
    {
      id: "inputA",
      type: "target",
      position: "left",
      style: {
        top: "35%",
      },
    },
    {
      id: "inputB",
      type: "target",
      position: "left",
      style: {
        top: "70%",
      },
    },
    {
      id: "output",
      type: "source",
      position: "right",
    },
  ],
};