export function escapeMetaCharacters(sourcePattern) {
    return sourcePattern.replaceAll(/[.*+\-?^${}()|[\]\\\/]/g, String.raw `\$&`);
}
export function unionRegExp(patterns) {
    return patterns.map(escapeMetaCharacters).join('|');
}
