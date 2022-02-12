export function escapeMetaCharacters(sourcePattern: string) {
  return sourcePattern.replaceAll(/[.*+\-?^${}()|[\]\\\/]/g, String.raw`\$&`);
}

export function unionRegExp(patterns: Array<string>) {
  return patterns.map(escapeMetaCharacters).join('|');
}
