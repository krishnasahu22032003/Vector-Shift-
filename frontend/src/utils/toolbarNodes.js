import { inputConfig } from '../configs/input.config';
import { outputConfig } from '../configs/output.config';
import { llmConfig } from '../configs/llm.config';
import { textConfig } from '../configs/text.config';
import { pdfConfig } from "../configs/pdf.config";
import { webSearchConfig } from "../configs/webSearch.config";
import { apiConfig } from "../configs/api.config";
import { memoryConfig } from "../configs/memory.config";
import { mergeConfig } from "../configs/merge.config";

const toolbarNodes = [
  {
    type: "customInput",
    config: inputConfig,
  },
  {
    type: "customOutput",
    config: outputConfig,
  },
  {
    type: "llm",
    config: llmConfig,
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

export default toolbarNodes ;