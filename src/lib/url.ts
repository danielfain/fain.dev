/** Prefix internal links with the deployment path, including GitHub Pages. */
export const withBase = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
