export function pushState(url: string | URL, title?: string, data?: any) {
  window.history.pushState(data, title ?? '', url);
}

export function replaceState(url: string | URL, title?: string, data?: any) {
  window.history.replaceState(data, title ?? '', url);
}
