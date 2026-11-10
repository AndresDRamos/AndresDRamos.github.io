// @ts-check
import { defineConfig } from "astro/config";

// SITE_URL se puede sobreescribir en el workflow de despliegue.
// Dominio propio: andcom.dev (Cloudflare).
const site = process.env.SITE_URL ?? "https://andcom.dev";

export default defineConfig({
  site,
  trailingSlash: "ignore",
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: { prefixDefaultLocale: false },
  },
});
