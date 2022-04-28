function qs(params = {}) {
  return Object.keys(params)
    .map((key) => key + '=' + params[key])
    .join('&');
}

export function buildImageUrl(asset, params) {
  return `https://images.takeshape.io/${asset.path}?${qs(params)}`;
}
