// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Fang JS Docs",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/luisangelf11/fang-js",
        },
      ],
      sidebar: [
        {
          label: "Guía",
          items: [
            { label: "Introducción", slug: "guides/introduction" },
            { label: "Empezando", slug: "guides/getting-started" },
            { label: "Fang (Core)", slug: "guides/fang" }, 
            { label: "Context", slug: "guides/context" }, 
            { label: "Middlewares", slug: "guides/middlewares" }, 
            { label: "Decorators", slug: "guides/decorators" },
            { label: "Autoloading de controladores", slug: "guides/autoloading-controller" },
            { label: "Zod (Validación)", slug: "guides/zod" },
            { label: "Exceptions", slug: "guides/exceptions" },
            { label: "Seguridad", slug: "guides/security" },
            { label: "Logger", slug: "guides/logger" },
            { label: "Constantes", slug: "guides/constants" },
          ],
        },
        {
          label: "Referencia",
          autogenerate: { directory: "reference" },
        },
        {
          label: "Comunidad",
          items: [{ label: "Sobre el creador", slug: "community/creator" }],
        },
      ],
    }),
  ],
});
