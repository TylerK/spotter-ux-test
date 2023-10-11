/**
 * Given an integer, returns a deterministic HSL string
 */
export function colorHex(n: number): string {
    const colors = [
        '#cc1241', // red
        '#e35e05', // orange
        '#892cdc', // purple
        '#02979e', // aqua
        '#c77d06', // gold
        '#b51f3b', // wine
        '#009800', // green
        '#0085ff', // blue
    ];

    return colors[n % colors.length];
}
