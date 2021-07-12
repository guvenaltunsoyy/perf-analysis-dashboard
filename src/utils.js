export function checkTooltipLabelLength(text) {
    if (!text) return '';
    if (text.length > 30) {
        return text.substring(0, 15) + '...' + text.substring(text.length - 15, text.length);
    }
    return text;
}