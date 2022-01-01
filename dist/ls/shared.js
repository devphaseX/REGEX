export function escapeRegExp(value) {
    return value.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');
}
export function unionRegExp(arr) {
    return arr.map((w) => escapeRegExp(w)).join('|');
}
