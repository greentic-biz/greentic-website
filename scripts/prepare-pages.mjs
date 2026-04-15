import { access, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const distDir = path.resolve("dist");
const indexPath = path.join(distDir, "index.html");
const noJekyllPath = path.join(distDir, ".nojekyll");
const fallbackPath = path.join(distDir, "404.html");
const cnamePath = path.join(distDir, "CNAME");

const customDomain = process.env.CUSTOM_DOMAIN?.trim();

const fallbackHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Redirecting…</title>
  </head>
  <body>
    <script>
      (function () {
        var isProjectSite = window.location.hostname.endsWith(".github.io");
        var segments = window.location.pathname.split("/").filter(Boolean);
        var basePath = isProjectSite && segments.length > 0 ? "/" + segments[0] : "";
        var routePath = window.location.pathname.slice(basePath.length) || "/";
        var restoredPath = routePath + window.location.search + window.location.hash;

        window.sessionStorage.setItem("spa-redirect-path", restoredPath);
        window.location.replace((basePath || "") + "/");
      })();
    </script>
  </body>
</html>
`;

await mkdir(distDir, { recursive: true });
await access(indexPath);
await writeFile(noJekyllPath, "");
await writeFile(fallbackPath, fallbackHtml);

if (customDomain) {
  await writeFile(cnamePath, `${customDomain}\n`);
}
