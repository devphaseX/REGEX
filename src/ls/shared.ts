export function escapeRegExp(value: string) {
  return value.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');
}

export function unionRegExp(arr: string[]) {
  return arr.map((w) => escapeRegExp(w)).join('|');
}
