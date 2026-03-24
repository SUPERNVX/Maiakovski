export function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Returns the relative path for an asset.
 * Works well for GitHub Pages by avoiding absolute path issues.
 */
export function getAssetPath(path: string) {
  // Remove leading slash if present and prepend ./
  const normalizedPath = path.startsWith("/") ? path.slice(1) : path;
  return `./${normalizedPath}`;
}
