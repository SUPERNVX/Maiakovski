export function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Returns the absolute path for an asset, prepending the base path if necessary.
 * Useful for GitHub Pages deployment.
 */
export function getAssetPath(path: string) {
  const base = "/Maiakovski/";
  // Remove leading slash if present to avoid double slashes
  const normalizedPath = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${normalizedPath}`;
}
