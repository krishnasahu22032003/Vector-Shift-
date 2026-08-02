import { ArrowRightToLine } from "lucide-react";

export const inputConfig = {
  title: "Input",
  icon:ArrowRightToLine ,
  size: {
    width: 200,
    height: 80,
  },

  fields: [
    {
      id: "inputName",
      label: "Name",
      type: "text",
      defaultSource: "generatedInputName",
    },
    {
      id: "inputType",
      label: "Type",
      type: "select",
      defaultValue: "Text",
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

  handles: [
    {
      id: "value",
      type: "source",
      position: "right",
    },
  ],
};