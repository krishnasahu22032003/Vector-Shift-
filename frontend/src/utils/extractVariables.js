export function extractVariables(text) {

    const regex = /\{\{\s*([A-Za-z_$][A-Za-z0-9_$]*)\s*\}\}/g;

    const variables = [];

    let match;

    while ((match = regex.exec(text)) !== null) {

        variables.push(match[1]);

    }

    return [...new Set(variables)];

}