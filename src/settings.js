/**
 * Global settings.
 **/
export const activeEnv =
  process.env.ACTIVE_ENV || process.env.NODE_ENV || "development";

export const metadata = [meta("msapplication-TileColor", "#000000")];

export const link = [
  {
    rel: "stylesheet",
    href: "https://unpkg.com/leaflet@1.3.3/dist/leaflet.css",
    integrity:
      "sha512-Rksm5RenBEKSKFjgI3a41vrjkw4EVPlJ3+OiI65vTjIdo9brlAacEuKOiQ5OFh7cOI1bkDwLqdLw3Zg0cRJAAQ==",
    crossorigin: ""
  }
];

function meta(name, content) {
  return {
    name: name,
    content: content
  };
}
export const BACKEND_URL = "/api/v1.0";
