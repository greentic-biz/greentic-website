const ABSOLUTE_URL_PATTERN = /^(?:[a-z]+:)?\/\//i;

const normalizeBase = (basePath: string) => {
  if (!basePath || basePath === "/") {
    return "/";
  }

  return `/${basePath.replace(/^\/+|\/+$/g, "")}`;
};

export const getRouterBasename = () => {
  if (typeof window === "undefined") {
    return normalizeBase(import.meta.env.BASE_URL);
  }

  const { hostname, pathname } = window.location;

  if (!hostname.endsWith(".github.io")) {
    return "/";
  }

  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return "/";
  }

  return `/${segments[0]}`;
};

export const withBasePath = (assetPath: string) => {
  if (!assetPath) {
    return assetPath;
  }

  if (
    ABSOLUTE_URL_PATTERN.test(assetPath) ||
    assetPath.startsWith("data:") ||
    assetPath.startsWith("#")
  ) {
    return assetPath;
  }

  const normalizedAsset = assetPath.replace(/^\/+/, "");
  const basePath = getRouterBasename();

  return basePath === "/" ? `/${normalizedAsset}` : `${basePath}/${normalizedAsset}`;
};

export const restoreSpaPathFromRedirect = () => {
  if (typeof window === "undefined") {
    return;
  }

  const redirectedPath = window.sessionStorage.getItem("spa-redirect-path");

  if (!redirectedPath) {
    return;
  }

  window.sessionStorage.removeItem("spa-redirect-path");

  const basePath = getRouterBasename();
  const normalizedRoute = redirectedPath.startsWith("/") ? redirectedPath : `/${redirectedPath}`;
  const targetPath = basePath === "/" ? normalizedRoute : `${basePath}${normalizedRoute}`;

  window.history.replaceState(null, "", targetPath);
};
