export function calculateNodeSize(text) {

    const lines = text.split("\n").length;

    const longestLine = Math.max(
        ...text.split("\n").map(line => line.length),
        20
    );

    return {

        width: Math.min(
            Math.max(260, longestLine * 8),
            500
        ),

        height: Math.min(
            Math.max(220, lines * 28 + 140),
            500
        )

    };

}