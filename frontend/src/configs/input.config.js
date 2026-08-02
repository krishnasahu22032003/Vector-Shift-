import { ArrowRightToLine } from "lucide-react";

export const inputConfig = {
  title: "Input",
  icon:ArrowRightToLine ,
  size: {
    width: 260,
    height: 260,
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