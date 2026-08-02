import { useMemo } from "react";

import { calculateNodeSize } from "../utils/calculateNodeSize";

import { extractVariables } from "../utils/extractVariables";

export function useTextNode(text){

    const size = useMemo(
        ()=>calculateNodeSize(text),
        [text]
    );

    const variables = useMemo(
        ()=>extractVariables(text),
        [text]
    );

    return {

        size,

        variables

    };

}