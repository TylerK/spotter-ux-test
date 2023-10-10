/**
 * Given an integer, returns a deterministic HSL string
 */
export function hsl(n: number) {
    const hues = [
        10, // Red
        30, // Orange
        280, // Purple
        190, // Aqua
        55, // Yellow
        320, // Pink
        140, // Green
        220, // Blue
    ];

    const hue = hues[n % hues.length];
    const saturation = 100;
    const lightness = 45;

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}
