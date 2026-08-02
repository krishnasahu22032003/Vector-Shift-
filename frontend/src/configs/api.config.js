import { Link } from "lucide-react";

export const apiConfig = {
  title: "API Request",
  icon: Link,
  description: "Calls an external API.",

  size: {
    width: 240,
    height: 140,
  },

  fields: [
    {
      id: "url",
      label: "URL",
      type: "text",
      defaultValue: "https://",
    },
    {
      id: "method",
      label: "Method",
      type: "select",
      defaultValue: "GET",
      options: [
        {
          label: "GET",
          value: "GET",
        },
        {
          label: "POST",
          value: "POST",
        },
      ],
    },
  ],

  handles: [
    {
      id: "input",
      type: "target",
      position: "left",
    },
    {
      id: "response",
      type: "source",
      position: "right",
    },
  ],
};