import { FileText } from "lucide-react";

export const textConfig = {
  title: "Text",
  icon: FileText,

  size: {
    width: 260,
    height: 220,
  },

  fields: [
    {
      id: "text",
      label: "Text",
      type: "textarea",
      defaultValue: "{{input}}",
      placeholder: "Type text here...",
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