/**
 * Given an integer, returns a deterministic HSL string
 */
export function colorHex(n: number): string {
    const colors = [
        '#cc1241', // red
        '#e35e05', // orange
        '#892cdc', // purple
        '#00adb5', // aqua
        '#e3ae02', // yellow
        '#ff607e', // pink
        '#009800', // green
        '#0085ff', // blue
    ];

    return colors[n % colors.length];
}
