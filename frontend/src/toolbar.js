// toolbar.js
import { inputConfig } from './configs/input.config';
import { outputConfig } from './configs/output.config';
import { llmConfig } from './configs/llm.config';
import { textConfig } from './configs/text.config';
import { pdfConfig } from "./configs/pdf.config";
import { webSearchConfig } from "./configs/webSearch.config";
import { apiConfig } from "./configs/api.config";
import { memoryConfig } from "./configs/memory.config";
import { mergeConfig } from "./configs/merge.config";

import { DraggableNode } from './draggableNode';
import toolbarNodes from './utils/toolbarNodes toolbarNodes ';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {toolbarNodes.map(({ type, config }) => (
                    <DraggableNode
                        key={type}
                        type={type}
                        label={config.title}
                        icon={config.icon}
                    />
                ))}
            </div>
        </div>
    );
};
