export function silentlyUpdateUrl(url: string, title?: string) {
  window.history.pushState(null, title, url);
}
