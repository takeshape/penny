export function unique<T extends Record<string, unknown>>(items: T[], id: string) {
  const seen = new Set();
  return items.filter((item) => {
    if (seen.has(item[id])) {
      return false;
    }
    seen.add(item[id]);
    return true;
  });
}
