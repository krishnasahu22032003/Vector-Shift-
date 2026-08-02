export const pdfConfig = {
  title: "PDF Loader",

  description: "Loads a PDF document.",

  size: {
    width: 220,
    height: 110,
  },

  fields: [
    {
      id: "fileName",
      label: "File",
      type: "text",
      defaultValue: "document.pdf",
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