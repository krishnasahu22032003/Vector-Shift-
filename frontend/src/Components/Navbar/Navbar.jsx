import "./Navbar.css";

import { DraggableNode } from "../../draggableNode";

import { inputConfig } from "../../configs/input.config";
import { outputConfig } from "../../configs/output.config";
import { llmConfig } from "../../configs/llm.config";
import { textConfig } from "../../configs/text.config";

import { pdfConfig } from "../../configs/pdf.config";
import { mergeConfig } from "../../configs/merge.config";
import { memoryConfig } from "../../configs/memory.config";
import { apiConfig } from "../../configs/api.config";
import { webSearchConfig } from "../../configs/webSearch.config";

const toolbarNodes = [
  {
    type: "customInput",
    config: inputConfig,
  },
  {
    type: "llm",
    config: llmConfig,
  },
  {
    type: "customOutput",
    config: outputConfig,
  },
  {
    type: "text",
    config: textConfig,
  },
  {
    type: "pdf",
    config: pdfConfig,
  },
  {
    type: "webSearch",
    config: webSearchConfig,
  },
  {
    type: "api",
    config: apiConfig,
  },
  {
    type: "memory",
    config: memoryConfig,
  },
  {
    type: "merge",
    config: mergeConfig,
  },
];

const Navbar = () => {
  return (
    <header className="navbar">

      <div className="navbar-brand">

        <div className="navbar-logo">
          VS
        </div>

        <div>

          <h2>VectorShift</h2>

          <p>Workflow Builder</p>

        </div>

      </div>

      <div className="navbar-toolbar">

        {toolbarNodes.map(({ type, config }) => (
          <DraggableNode
            key={type}
            type={type}
            label={config.title}
            icon={config.icon}
          />
        ))}

      </div>

      <div className="navbar-right">

        AI Workflow Builder

      </div>

    </header>
  );
};

export default Navbar;