import { Bot } from "lucide-react";

export const llmConfig = {
  title: "LLM",
  description: "This is a LLM.",
  icon:Bot,
  size: {
    width: 200,
    height: 80,
  },

  fields: [],

  handles: [
    {
      id: "system",
      type: "target",
      position: "left",
      style: {
        top: "33%",
      },
    },
    {
      id: "prompt",
      type: "target",
      position: "left",
      style: {
        top: "66%",
      },
    },
    {
      id: "response",
      type: "source",
      position: "right",
    },
  ],
};