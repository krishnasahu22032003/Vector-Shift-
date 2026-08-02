import { Database } from "lucide-react";

export const memoryConfig = {
  title: "Memory",
   icon: Database,
  description: "Stores conversation context.",

  size: {
    width: 220,
    height: 120,
  },

  fields: [
    {
      id: "key",
      label: "Key",
      type: "text",
      defaultValue: "conversation",
    },
  ],

  handles: [
    {
      id: "input",
      type: "target",
      position: "left",
    },
    {
      id: "memory",
      type: "source",
      position: "right",
    },
  ],
};